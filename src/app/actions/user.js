import axios from 'axios'
import A from '../const/actionTypes'
import globalConfig from '../const/globalConfig'

export default {
  checkDeliveryZone: (addressValues) => {
    return (dispatch, getState) => {
      let address = addressValues.gmaps.formatted_address
      let deliverable = axios.post(`${globalConfig.ROOT_URL}/check_if_deliverable`, {address: address})
      dispatch({
        type: A.CHECK_DELIVERY_ZONE,
        deliverable
      })
    }
  },
}
