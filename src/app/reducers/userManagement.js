import A from '../const/actionTypes'

export default (currentState, action) => {
  let updatedState = { ...currentState }

  switch (action.type) {
    case A.ADDRESS_IS_DEFAULT:
      updatedState.addressIsDefault = action.addressIsDefault
      break
    case A.SET_ADDRESS_TYPE:
      updatedState.addressType = action.addressType
      break
    case A.SET_CITY:
      updatedState.city = action.city
      break
    case A.SET_PHONE_NUMBER:
      updatedState.phoneNumber = action.phoneNumber
      break
    case A.SET_SAVE_ADDRESS:
      updatedState.saveAddress = action.saveAddress
      break
    case A.SET_STATE:
      updatedState.state = action.state
      break
    case A.SET_STREET_ADDRESS:
      updatedState.streetAddress = action.streetAddress
      break
    case A.SET_STREET_ADDRESS_TWO:
      updatedState.streetAddress = action.streetAddress
      break
    case A.SET_ZIPCODE:
      updatedState.zipcode = action.zipcode
      break
  }
  return updatedState
}
