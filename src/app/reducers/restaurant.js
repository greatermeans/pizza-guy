import A from '../const/actionTypes'
import initialState from '../store/initialState'

export default function (currentState, action) {

  switch (action.type) {
    case A.CHECK_DELIVERY_ZONE:
      return { ...currentState,
        restaurantsList: action.payload.data,
        restaurantsCategories: [].concat(...action.payload.data.map(restaurant => {
          return restaurant.categories
        })),
        status: null,
        error: null,
        loading: false
      }
    case A.FETCH_RESTAURANT:
      return { ...currentState,
        activeRestaurant: {restaurant: action.payload.data, activeCourse: {id: 5, name: 'featured'}},
        status: null,
        error: null,
        loading: false
      }
    case A.CHANGE_ACTIVE_COURSE:
      return { ...currentState,
        activeRestaurant: {restaurant: currentState.activeRestaurant.restaurant, activeCourse: action.payload},
        status: null,
        error: null,
        loading: false
      }
    default:
      return currentState || initialState.restaurant
  }
}
