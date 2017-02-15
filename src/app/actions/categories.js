import A from '../const/actionTypes'
import firebaseService from '../infrastructure/FirebaseService'

export default {
  getCategories: () => {
    return (dispatch, getState) => {
      firebaseService.subscribe('categories', (result) => {
        const categories = result.val() || {}
        dispatch({
          type: A.SET_CATEGORIES,
          categories
        })
      })
    }
  },
}
