import A from '../const/actionTypes'
import initialState from '../store/initialState'

export default function (currentState, action) {

  switch (action.type) {
    case A.CHECK_DELIVERY_ZONE:
      return {
        ...currentState,
        deliverable: action.deliverable
      }
    default:
      return currentState || initialState.user
  }
}
