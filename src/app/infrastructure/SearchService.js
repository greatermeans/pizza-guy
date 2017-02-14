import Config from '../config'
import firebase from 'firebase'
import firebaseCacheService from '../infrastructure/FirebaseCacheService'
import firebaseService from './FirebaseService'

const db = () => firebase.database()
const DEFAULT_NAMESPACE = 'global/'

class SearchService {
  searchES(
    searchText,
    type,
    esType
  ) {
    let esQuery = this.constructor.createESQuery(searchText, esType)
    return this.simpleRPC('search/request', 'search/response', esQuery, '')
      .then(results=> {
        let entities = this.constructor.extractEntities(results)
        this.cacheResults(type, entities)
        return entities
      })
  }

  cacheResults(
    type,
    entityMap
  ) {
    Object.keys(entityMap).forEach(key => firebaseCacheService.cache(type, key))
  }

  static prepareActionPayload(
    entityMap
  ) {
    return Object.keys(entityMap).reduce((accumulator, key) => {
      accumulator[key] = true
      return accumulator
    }, {})
  }

  static createESQuery(
    searchTest,
    entity
  ) {
   /* eslint-disable camelcase */
    const entitySearches = {
      part: {
        query: {
          multi_match: {
            fields: ['_all'],
            query: `${searchTest}*`,
            type: 'phrase_prefix'
          }
        }
      },
      equipment: {
        query: {
          query_string: {
            query: `${searchTest}*`
          }
        }
      },
      site: {
        query: {
          query_string: {
            query: `${searchTest}*`,
            fields: ['_all', '_source.address.*^5'],  //Boost the address field
          }
        }
      }
    }
    /* eslint-enable camelcase */
    let queryDsl = entitySearches[entity]
    return {
      index: Config.ELASTICSEARCH_INDEX,
      queryDsl: JSON.stringify(queryDsl),
      size: 20,
      type: entity
    }
  }

  static extractEntities(_in) {
    try {
      return _in.hits.reduce((accumulator, source)=> {
        let entity = source._source
        entity._id = source._id
        accumulator[entity._id] = entity
        return accumulator
      }, {})
    } catch (err) {
      return {}
    }
  }

  simpleRPC(
    path,
    watchPath,
    value,
    namespace = DEFAULT_NAMESPACE,
    timeOut = 2000
  ) {
    let pk = firebaseService.add(path, value, namespace)
    return new Promise((resolve, reject) => {  //We need to account for the firebase RPC not working
      setTimeout(()=> {
        resolve([])
      }, timeOut)
      db().ref(`${namespace}${watchPath}/${pk}`).on('value', (data) => {
        if (!data.exists()) {
          return
        }
        db().ref(`${namespace}${watchPath}/${pk}`).off()
        db().ref(`${namespace}${watchPath}/${pk}`).remove()
        resolve(data.val())
      }, reject)
    })
  }
}

const searchService = new SearchService()

export default searchService
