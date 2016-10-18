import { combineReducers } from 'redux'
import CartReducer from './reducer_cart'
import UserReducer from './reducer_user'
import RestaurantReducer from './reducer_restaurants'
import UpdateAccountReducer from './reducer_updateAccount'
import { routerReducer, } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  cart: CartReducer,
  user: UserReducer,
  form: formReducer,
  updateAccount: UpdateAccountReducer,
  restaurants: RestaurantReducer,
  routing: routerReducer,
})

export default rootReducer
