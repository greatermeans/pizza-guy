import authActions from './auth'
import categoriesActions from './categories'
import cartActions from './cart'
import dialogActions from './dialog'
import itemManagementActions from './itemManagement'
import itemsActions from './items'
import routeParamsActions from './routeParams'
import routingActions from './routing'
import snackbarActions from './snackbar'
import UIActions from './UI'

export default Object.assign(
  {},
  authActions,
  cartActions,
  categoriesActions,
  dialogActions,
  itemManagementActions,
  itemsActions,
  routeParamsActions,
  routingActions,
  snackbarActions,
  UIActions,
)
