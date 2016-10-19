import A from '../const/actionTypes'
import initialState from '../store/initialState'

export default function (currentState, action) {

  switch (action.type) {
    case A.FETCH_RESTAURANT:
      return {
        ...currentState,
        restaurant: action.restaurantDetails
      }
    default:
      return currentState || initialState.restaurant
  }
}
