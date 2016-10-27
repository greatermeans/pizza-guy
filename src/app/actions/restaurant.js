import axios from 'axios'
import A from '../const/actionTypes'
import globalConfig from '../const/globalConfig'

export default {
  fetchRestaurant: (restaurantId) => {
    return (dispatch, getState) => {
      axios.get(`${globalConfig.API}/restaurants/${restaurantId}`)
      .then((response) => {
        let data = response.data
        dispatch({
          type: A.FETCH_RESTAURANT,
          data
        })
      })
    }
  },
}
