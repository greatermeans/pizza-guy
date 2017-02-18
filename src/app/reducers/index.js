import { combineReducers, } from 'redux'
import { routerReducer, } from 'react-router-redux'
import appBarReducer from './appBar'
import authReducer from './auth'
import cacheIndexReducer from './cacheIndex'
import cartReducer from './cart'
import categoriesReducer from './categories'
import dialogReducer from './dialog'
import itemManagementReducer from './itemManagement'
import itemsReducer from './items'
import routeParamsReducer from './routeParams'
import snackbarReducer from './snackbar'
import UIReducer from './UI'

const rootReducer = combineReducers({
  appBar: appBarReducer,
  auth: authReducer,
  cacheIndex: cacheIndexReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  dialog: dialogReducer,
  itemManagement: itemManagementReducer,
  items: itemsReducer,
  routing: routerReducer,
  routeParams: routeParamsReducer,
  snackbar: snackbarReducer,
  UI: UIReducer,
})

export default rootReducer
