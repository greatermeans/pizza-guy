import A from '../const/actionTypes'
import firebaseService from '../infrastructure/FirebaseService'

export default {
  getItems: () => {
    return (dispatch, getState) => {
      firebaseService.subscribe('items', (result) => {
        const items = result.val() || {}
        dispatch({
          type: A.SET_ITEMS,
          items
        })
      })
    }
  },
}
