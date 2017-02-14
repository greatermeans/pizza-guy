import { push, } from 'react-router-redux'
import A from '../const/actionTypes'
import P from '../const/paramTypes'

const encodeParams = (routeParams) => {
  let paramsString = ''
  Object.keys(routeParams).map((routeParamKey) => {
    if (routeParamKey !== 'route' && routeParams[routeParamKey]) {
      if (paramsString !== '') {
        paramsString += '&'
      }
      let paramKey = Object.keys(P).find((key) => { return P[key] === routeParamKey })
      paramsString += paramKey + '=' + routeParams[routeParamKey]
    }
  })
  return paramsString
}

export default {
  routeTo: (
    route,
    params
  ) => {
    return (dispatch, getState) => {
      if (getState().auth.uid) {
        let path = '/' + route
        if (params) {
          path += '/' + encodeParams(params)
        }
        dispatch(push(path))
      } else {
        if (route === 'logout') {
          dispatch(push('/logout'))
        } else {
          dispatch(push('/'))
        }
      }
    }
  },
  updateRouteParams: (params) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.UPDATE_ROUTE_PARAMS,
        params,
      })
      const routeParams = getState().routeParams
      let updatedParamsString = encodeParams(routeParams)
      const pathSegments = getState().routing.locationBeforeTransitions.pathname.split('/')
      if (pathSegments.length > 2) {
        pathSegments[2] = updatedParamsString
        dispatch(push(pathSegments.join('/')))
      }
    }
  },
}
