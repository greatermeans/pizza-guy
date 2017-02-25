import A from '../const/actionTypes'
import actions from '.'
import firebaseService from '../infrastructure/FirebaseService'

export default {
  addNewAddress: () => {
    return (dispatch, getState) => {
      const { city, state, streetAddress, zipcode } = getState().userManagement
      const auth = getState().auth
      const hasDefaultAddress = Boolean(getState().user.defaultAddressId)
      const fullAddress = [streetAddress, city, state, zipcode].join(', ')
      const newAddress = {
        city,
        defaultAddress: !hasDefaultAddress,
        fullAddress,
        newAddress: true,
        saveAddress: true,
        state,
        streetAddress,
        zipcode,
      }
      firebaseService.add(`addressBook/${auth.uid}`, newAddress)
    }
  },
  getUserAddresses: () => {
    return (dispatch, getState) => {
      const auth = getState().auth
      dispatch(actions.startDataRequest('addresses'))
      firebaseService.subscribe(`addressBook/${auth.uid}`, (result) => {
        dispatch(actions.endDataRequest('addresses'))
        const addresses = result.val() || {}
        const defaultAddressId = Object.keys(addresses).find(address => addresses[address].defaultAddress)
        dispatch({
          type: A.SET_USER_ADDRESSES,
          addresses,
          defaultAddressId
        })
      })
    }
  }
}
