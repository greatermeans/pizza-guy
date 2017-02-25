// import { push, } from 'react-router-redux'
import actions from '.'
// import A from '../const/actionTypes'
// import P from '../const/paramTypes'

export default {
  handleRouteChange: () => {
    return (dispatch, getState) => {
      const { auth, routeParams, UI, } = getState()
      if (auth.uid) {
        if (routeParams.route === '') {
          dispatch(actions.navigateToOrderView())
        }
        if (
          routeParams.route === 'order' ||
          routeParams.route === 'checkout' ||
          routeParams.route === 'confirmAddress'
        ) {
          if (!(UI.requested || {})['addresses']) {
            dispatch(actions.getUserAddresses())
          }
          if (!(UI.requested || {})['cartItems']) {
            dispatch(actions.getCartItems())
          }
          if (!(UI.requested || {})['categories']) {
            dispatch(actions.getCategories())
          }
          if (!(UI.requested || {})['items']) {
            dispatch(actions.getItems())
          }
        }

        if (routeParams.route === 'logout') {
          dispatch(actions.logout())
          dispatch(actions.routeTo(''))
        }

      }
    }
  },
  navigateToOrderView: () => {
    return (dispatch, getState) => {
      dispatch(actions.routeTo(
        'order'
      ))
    }
  },
}
