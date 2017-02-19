import A from '../const/actionTypes'
import firebaseService from '../infrastructure/FirebaseService'

export default {
  addNewAddress: () => {
    return (dispatch, getState) => {
      const auth = getState().auth
      firebaseService.add(`addressBook/${auth.uid}`, null)
    }
  },
  getUserAddresses: () => {
    return (dispatch, getState) => {
      const auth = getState().auth
      firebaseService.subscribe(`addressBook/${auth.uid}`, (result) => {
        const addresses = result.val() || {}
        dispatch({
          type: A.SET_USER_ADDRESSES,
          addresses
        })
      })
    }
  }
}
