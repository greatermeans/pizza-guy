import A from '../const/actionTypes'
import actions from '.'
import firebaseService from '../infrastructure/FirebaseService'

export default {
  getCategories: () => {
    return (dispatch, getState) => {
      dispatch(actions.startDataRequest('categories'))
      firebaseService.subscribe('categories', (result) => {
        dispatch(actions.endDataRequest('categories'))
        const categories = result.val() || {}
        dispatch({
          type: A.SET_CATEGORIES,
          categories
        })
      })
    }
  },
}
