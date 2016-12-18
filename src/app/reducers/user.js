import A from '../const/actionTypes'
import initialState from '../store/initialState'

export default function (currentState, action) {

  switch (action.type) {
    case A.NEW_ADDRESS:
      return {
        ...currentState,
        address: {
          ...action.address
        }
      }
    case A.COMPLETE_NEW_USER:
      return {
        ...currentState,
        address: {
          ...action.address
        }
      }
    default:
      return currentState || initialState.user
  }
}
