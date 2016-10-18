import axios from 'axios'
import A from '../const/actionTypes'
import globalConfig from '../const/globalConfig'

export default {
  fetchRestaurant: (restaurantId) => {
    return (dispatch, getState) => {
      let request = axios.get(`${globalConfig.ROOT_URL}/restaurants/${restaurantId}`)
      dispatch({
        type: A.FETCH_RESTAURANT,
        request
      })
    }
  },
  checkDeliveryZone: (addressValues) => {
    return (dispatch, getState) => {
      let address = addressValues.gmaps.formatted_address
      let request = axios.post(`${globalConfig.ROOT_URL}/check_delivery_zone`, {address: address})
      dispatch({
        type: A.CHECK_DELIVERY_ZONE,
        request
      })
    }
  },
  changeActiveCourse: (course) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.CHANGE_ACTIVE_COURSE,
        payload: course
      })
    }
  },
}
