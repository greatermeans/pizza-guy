import cartActions from './cart'
import restaurantActions from './restaurant'
import menuItemsActions from './menuItems'
import selectedCourseActions from './selectedCourse'
import coursesActions from './courses'
import userActions from './user'
import globalActions from './global'

export default Object.assign(
  {},
  cartActions,
  coursesActions,
  globalActions,
  menuItemsActions,
  restaurantActions,
  selectedCourseActions,
  userActions
)
