import authActions from './auth'
import categoriesActions from './categories'
import dialogActions from './dialog'
import itemsActions from './items'
import routeParamsActions from './routeParams'
import routingActions from './routing'
import snackbarActions from './snackbar'
import UIActions from './UI'

export default Object.assign(
  {},
  authActions,
  categoriesActions,
  dialogActions,
  itemsActions,
  routeParamsActions,
  routingActions,
  snackbarActions,
  UIActions,
)
