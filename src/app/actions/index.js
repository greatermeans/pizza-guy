import cartActions from './cart'
import restaurantActions from './restaurant'
import menuItemsActions from './menuItems'
import selectedCourseActions from './selectedCourse'
import coursesActions from './courses'
import userActions from './user'
export default Object.assign(
  {},
  cartActions,
  coursesActions,
  menuItemsActions,
  restaurantActions,
  selectedCourseActions,
  userActions
)
