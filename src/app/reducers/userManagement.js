import A from '../const/actionTypes'

export default (currentState, action) => {
  let updatedState = { ...currentState }

  switch (action.type) {
    case A.SET_CITY:
      updatedState.city = action.city
      break
    case A.SET_PHONE_NUMBER:
      updatedState.phoneNumber = action.phoneNumber
      break
    case A.SET_STATE:
      updatedState.state = action.state
      break
    case A.SET_STREET_ADDRESS:
      updatedState.streetAddress = action.streetAddress
      break
    case A.SET_ZIPCODE:
      updatedState.zipcode = action.zipcode
      break
  }
  return updatedState
}
