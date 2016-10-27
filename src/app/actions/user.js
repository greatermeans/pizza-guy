import axios from 'axios'
import A from '../const/actionTypes'
import globalConfig from '../const/globalConfig'

export default {
  checkDeliveryZone: (addressValues) => {
    return (dispatch, getState) => {
      let address = addressValues.gmaps.formatted_address
      let service = new google.maps.DistanceMatrixService()
      service.getDistanceMatrix({
        origins: [address],
        destinations: ['Fagelvagen 13, Marsta, Sweden'],
        travelMode: 'DRIVING'
      }, (response) => {
        let distance = response.rows[0].elements[0].distance.value
        let deliverable = distance < 20000 ? true : false
        dispatch({
          type: A.CHECK_DELIVERY_ZONE,
          deliverable
        })
      })
    }
  },
}
