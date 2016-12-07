import cartActions from './cart'
import restaurantActions from './restaurant'
import menuItemsActions from './menuItems'
import coursesActions from './courses'
import userActions from './user'
import globalActions from './global'
import routeParamsActions from './routeParams'
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
  routeParamsActions,
  snackbarActions,
  userActions
)
