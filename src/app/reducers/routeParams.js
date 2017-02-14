import A from '../const/actionTypes'
import P from '../const/paramTypes'

export default (currentState, action) => {
  let updatedState = Object.assign({}, currentState)

  switch (action.type) {
    case A.LOCATION_CHANGE:
      const pathSegments = action.payload.pathname.split('/')
      updatedState = {}
      if (pathSegments.length > 1) {
        updatedState.route = pathSegments[1]
      }
      if (pathSegments.length > 2) {
        const paramSegments = pathSegments[2].split('&')
        paramSegments.map((paramSegment) => {
          const keyAndValue = paramSegment.split('=')
          updatedState[P[keyAndValue[0]]] = keyAndValue[1]
        })
      }
      break
    case A.UPDATE_ROUTE_PARAMS:
      updatedState = Object.assign({}, updatedState, action.params)
      break
  }

  return updatedState
}
