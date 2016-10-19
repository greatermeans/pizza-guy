import axios from 'axios'
import A from '../const/actionTypes'
import globalConfig from '../const/globalConfig'

export default {
  fetchRestaurant: (restaurantId) => {
    return (dispatch, getState) => {
      let restaurantDetails = axios.get(`${globalConfig.ROOT_URL}/restaurants/${restaurantId}`)
      dispatch({
        type: A.FETCH_RESTAURANT,
        restaurantDetails
      })
    }
  },
}
