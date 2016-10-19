import { combineReducers } from 'redux'
import { routerReducer, } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import cartReducer from './cart'
import restaurantReducer from './restaurant'
import coursesReducer from './courses'
import menuItemsReducer from './menuItems'
import selectedCourseReducer from './selectedCourse'
import userReducer from './user'

const rootReducer = combineReducers({
  cart: cartReducer,
  courses: coursesReducer,
  form: formReducer,
  menuItems: menuItemsReducer,
  restaurant: restaurantReducer,
  routing: routerReducer,
  selectedCourse: selectedCourseReducer,
  user: userReducer,
})

export default rootReducer
