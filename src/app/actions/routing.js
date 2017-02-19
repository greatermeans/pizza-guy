// import { push, } from 'react-router-redux'
import actions from '.'
// import A from '../const/actionTypes'
// import P from '../const/paramTypes'

export default {
  routeAuthenticatedUser: () => {
    return (dispatch, getState) => {
      const { route, } = getState().routeParams
      dispatch(actions.getUserAddresses())
      dispatch(actions.getCategories())
      dispatch(actions.getItems())
      dispatch(actions.getCartItems())
      if (route !== 'order') {
        dispatch(actions.routeTo('order'))
      }
    }
  },
}
