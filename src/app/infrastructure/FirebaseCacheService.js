import cacheDependencies from '../const/cacheDependencies'
import firebaseService from './FirebaseService'
import store from '../store'

const DEFAULT_NAMESPACE = 'global/'
const MAX_PRIORITY_DEPTH = 1
const MAX_RELATION_DEPTH = 3

class FirebaseCacheService {
  constructor() {
    this.cacheQueue = []
    this.priorityQueue = []
  }

  cache(
    type,
    id,
    namespace = DEFAULT_NAMESPACE,
    relationDepth = 0,
    action = null
  ) {
    if (
      !this.isQueued(type, id) &&
      !this.isCached(type, id) &&
      id.charAt(0) === '-'
    ) {
      store.dispatch({
        type: 'INDEX_SET',
        cachedType: type,
        id
      })
      this.cacheQueue.push({
        type,
        id,
        namespace,
        relationDepth,
        action
      })
      this.stepCacheQueue()
    }
  }

  prioritize(
    type,
    id,
    namespace = DEFAULT_NAMESPACE,
    relationDepth = 0
  ) {
    if (
      !this.isCached(type, id) &&
      !this.isPrioritized(type, id) &&
      id.charAt(0) === '-'
    ) {
      const position = this.cacheQueue.findIndex((request) => request.type === type && request.id === id)
      if (position < 0) {
        this.priorityQueue.push({
          type,
          id,
          namespace,
          priority: true,
          relationDepth
        })
        this.stepCacheQueue()
      } else {
        if (position > 5) {
          const priority = this.cacheQueue.splice(position, 1)
          priority[0].priority = true
          this.priorityQueue.push({
            type,
            id,
            namespace,
            priority: true,
            relationDepth
          })
          this.stepCacheQueue()
        }
      }
    }
  }

  // end of public API - do not call the methods below

  isQueued(
    type,
    id
  ) {
    return Boolean(
      store.getState()['cacheIndex'][type] &&
      store.getState()['cacheIndex'][type][id]
    )
  }

  isPrioritized(
    type,
    id
  ) {
    const cacheRequest = this.priorityQueue.find((request) => request.type === type && request.id === id)
    return Boolean(
      this.isQueued(type, id) &&
      cacheRequest
    )
  }

  isCached(
    type,
    id
  ) {
    return Boolean(
      store.getState()[type] &&
      store.getState()[type][id]
    )
  }

  stepCacheQueue() {
    if (
      (
        this.cacheQueue.length ||
        this.priorityQueue.length
      ) &&
      !this.caching
    ) {
      this.caching = true
      const cacheRequest = this.priorityQueue.shift() || this.cacheQueue.shift()
      let { namespace, type, id, priority, relationDepth } = cacheRequest
      relationDepth++
      firebaseService.subscribe(
        type + '/' + id,
        (result) => {
          result = result.val()
          if (result) {
            store.dispatch({
              type: 'SET_' + type.toUpperCase(),
              value: result,
              id
            })
            if (cacheRequest.action) {
              store.dispatch(cacheRequest.action)
            }
          }
          this.caching = false
          if (
            result &&
            cacheDependencies[type] &&
            relationDepth <= MAX_RELATION_DEPTH
          ) {
            Object.keys(cacheDependencies[type]).map((dependency) => {
              const dependencyKeys = cacheDependencies[type][dependency]
              if (typeof dependencyKeys === 'string') {
                this.cacheDependencyValues(
                  dependency,
                  result[dependencyKeys],
                  namespace,
                  1,
                  priority,
                  relationDepth
                )
              }
              if (typeof dependencyKeys === 'object') {
                Object.keys(dependencyKeys).map((dependencyKey) => {
                  if (dependencyKey !== 'namespace') {
                    namespace = dependencyKeys['namespace'] || namespace
                    const depth = dependencyKeys[dependencyKey].depth || 1
                    this.cacheDependencyValues(
                      dependency,
                      result[dependencyKey],
                      namespace,
                      depth,
                      priority,
                      relationDepth
                    )
                  }
                })
              }
            })
          }
          this.stepCacheQueue()
        },
        namespace
      )
    }
  }

  cacheDependencyValues(
    dependency,
    dependencyValues,
    namespace,
    depth = 1,
    priority = false,
    relationDepth
  ) {
    if (typeof dependencyValues === 'string') {
      if (
        priority &&
        relationDepth <= MAX_PRIORITY_DEPTH
      ) {
        this.prioritize(
          dependency,
          dependencyValues,
          namespace,
          relationDepth
        )
      } else {
        this.cache(
          dependency,
          dependencyValues,
          namespace,
          relationDepth
        )
      }
    }
    if (typeof dependencyValues === 'object') {
      this.cacheNestedDependencies(
        dependency,
        dependencyValues,
        namespace,
        depth,
        1,
        priority,
        relationDepth
      )
    }
  }

  cacheNestedDependencies(
    dependency,
    dependencyValues,
    namespace,
    depth,
    currentDepth,
    priority,
    relationDepth
  ) {
    Object.keys(dependencyValues).map((dependencyValue) => {
      if (depth === currentDepth) {
        if (
          priority &&
          relationDepth <= MAX_PRIORITY_DEPTH
        ) {
          this.prioritize(
            dependency,
            dependencyValue,
            namespace,
            relationDepth
          )
        } else {
          this.cache(
            dependency,
            dependencyValue,
            namespace,
            relationDepth
          )
        }
      } else {
        this.cacheNestedDependencies(
          dependency,
          dependencyValues[dependencyValue],
          namespace,
          depth,
          currentDepth + 1,
          priority,
          relationDepth
        )
      }
    })
  }
}

const firebaseCacheService = new FirebaseCacheService()

export default firebaseCacheService
