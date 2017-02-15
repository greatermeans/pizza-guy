import { combineReducers, } from 'redux'
import { routerReducer, } from 'react-router-redux'
import appBarReducer from './appBar'
import authReducer from './auth'
import cacheIndexReducer from './cacheIndex'
import categoriesReducer from './categories'
import dialogReducer from './dialog'
import itemsReducer from './items'
import routeParamsReducer from './routeParams'
import snackbarReducer from './snackbar'
import UIReducer from './UI'

const rootReducer = combineReducers({
  appBar: appBarReducer,
  auth: authReducer,
  cacheIndex: cacheIndexReducer,
  categories: categoriesReducer,
  dialog: dialogReducer,
  items: itemsReducer,
  routing: routerReducer,
  routeParams: routeParamsReducer,
  snackbar: snackbarReducer,
  UI: UIReducer,
})

export default rootReducer
