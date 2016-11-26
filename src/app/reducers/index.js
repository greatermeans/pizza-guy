import { combineReducers } from 'redux'
import { routerReducer, } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import cartReducer from './cart'
import restaurantReducer from './restaurant'
import coursesReducer from './courses'
import dialogReducer from './dialog'
import menuItemsReducer from './menuItems'
import snackbarReducer from './snackbar'
import typesReducer from './types'
import userReducer from './user'

const rootReducer = combineReducers({
  cart: cartReducer,
  courses: coursesReducer,
  dialog: dialogReducer,
  form: formReducer,
  menuItems: menuItemsReducer,
  restaurant: restaurantReducer,
  routing: routerReducer,
  snackbar: snackbarReducer,
  types: typesReducer,
  user: userReducer,
})

export default rootReducer
