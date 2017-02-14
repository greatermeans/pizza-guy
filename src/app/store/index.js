import { applyMiddleware, createStore, } from 'redux'
import { browserHistory, } from 'react-router'
import { routerMiddleware, } from 'react-router-redux'
import initialState from './initialState'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

const logger = store => next => action => {
  return next(action)
}
const middleware = routerMiddleware(browserHistory)

export default applyMiddleware(
  thunk,
  middleware,
  logger
)(createStore)(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension())
