// import { push, } from 'react-router-redux'
import actions from '.'
// import A from '../const/actionTypes'
// import P from '../const/paramTypes'

export default {
  routeAuthenticatedUser: () => {
    return (dispatch, getState) => {
      dispatch(actions.getItems())
      dispatch(actions.getCategories())
      dispatch(actions.routeTo('order'))
    }
  },
}
