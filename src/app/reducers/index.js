import { combineReducers } from 'redux'
import { routerReducer, } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import cartReducer from './cart'
import restaurantReducer from './restaurant'

const rootReducer = combineReducers({
  cart: cartReducer,
  form: formReducer,
  restaurants: restaurantReducer,
  routing: routerReducer,
})

export default rootReducer
