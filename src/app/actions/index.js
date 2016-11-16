import cartActions from './cart'
import restaurantActions from './restaurant'
import menuItemsActions from './menuItems'
import selectedCourseActions from './selectedCourse'
import coursesActions from './courses'
import userActions from './user'
import globalActions from './global'
import snackbarActions from './snackbar'
import dialogActions from './dialog'

export default Object.assign(
  {},
  cartActions,
  coursesActions,
  dialogActions,
  globalActions,
  menuItemsActions,
  restaurantActions,
  selectedCourseActions,
  snackbarActions,
  userActions
)
