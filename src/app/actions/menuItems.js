import axios from 'axios'
import A from '../const/actionTypes'
import globalConfig from '../const/globalConfig'

export default {
  getItems: () => {
    return (dispatch, getState) => {
      let restaurantId = getState().restaurant.id
      let menuItems = axios.get(`${globalConfig.ROOT_URL}/menuItems/`, {restaurantId: restaurantId})
      dispatch({
        type: A.CACHE_MENU_ITEMS,
        menuItems
      })
    }
  },
  selectItem: (itemId) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.ADD_ITEM,
        itemId
      })
    }
  }
}
