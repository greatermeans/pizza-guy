import A from '../const/actionTypes'
import actions from '../actions'

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
        let distance = response.rows[0].elements[0].distance && response.rows[0].elements[0].distance.value
        let deliverable = distance < 20000
        dispatch({
          type: A.CHECK_DELIVERY_ZONE,
          deliverable
        })
        actions.changePath('/order')
      })
    }
  },
}
