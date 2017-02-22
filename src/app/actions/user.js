import A from '../const/actionTypes'
import firebaseService from '../infrastructure/FirebaseService'

export default {
  addNewAddress: () => {
    return (dispatch, getState) => {
      const { city, state, streetAddress, zipcode } = getState().userManagement
      const auth = getState().auth
      const fullAddress = [streetAddress, city, state, zipcode].join(', ')
      const newAddress = {city, fullAddress, state, streetAddress, zipcode, }
      firebaseService.add(`addressBook/${auth.uid}`, newAddress)
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
