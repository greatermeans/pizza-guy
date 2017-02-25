import authActions from './auth'
import categoriesActions from './categories'
import cartActions from './cart'
import checkoutActions from './checkout'
import dialogActions from './dialog'
import itemManagementActions from './itemManagement'
import itemsActions from './items'
import routeParamsActions from './routeParams'
import routingActions from './routing'
import snackbarActions from './snackbar'
import UIActions from './UI'
import userActions from './user'
import userManagementActions from './userManagement'

export default Object.assign(
  {},
  authActions,
  cartActions,
  categoriesActions,
  checkoutActions,
  dialogActions,
  itemManagementActions,
  itemsActions,
  routeParamsActions,
  routingActions,
  snackbarActions,
  UIActions,
  userActions,
  userManagementActions,
)
