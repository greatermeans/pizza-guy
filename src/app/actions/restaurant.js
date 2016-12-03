import axios from 'axios'
import A from '../const/actionTypes'
import globalConfig from '../const/globalConfig'
import _ from 'lodash'

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
      let config = { headers: {restaurant: restaurantId} }
      axios.get(`${globalConfig.API}/courses`, config)
      .then((response) => {
        let data = {}
        response.data.map(datum => {
          data[datum.id] = _.omit(datum, 'id')
        })
        dispatch({
          type: A.CACHE_COURSES,
          data
        })
      })
      axios.get(`${globalConfig.API}/items`, config)
      .then((response) => {
        let data = {}
        response.data.map(datum => {
          data[datum.id] = _.omit(datum, 'id')
        })
        dispatch({
          type: A.CACHE_MENU_ITEMS,
          data
        })
      })
      axios.get(`${globalConfig.API}/types`, config)
      .then((response) => {
        let data = {}
        response.data.map(datum => {
          data[datum.id] = _.omit(datum, 'id')
        })
        dispatch({
          type: A.CACHE_TYPES,
          data
        })
      })
    }
  },
}
