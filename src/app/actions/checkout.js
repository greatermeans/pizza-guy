import actions from '.'

export default {
  handleCheckoutProcess: () => {
    return (dispatch, getState) => {
      const { addresses, defaultAddressId, } = getState().user
      if (defaultAddressId && !addresses[defaultAddressId].newAddress) {
        dispatch(actions.routeTo('checkout'))
      } else {
        dispatch(actions.routeTo('confirmAddress'))
      }
    }
  },
}
