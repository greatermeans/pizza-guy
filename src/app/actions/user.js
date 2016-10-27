import A from '../const/actionTypes'

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
        let deliverable = distance < 20000
        dispatch({
          type: A.CHECK_DELIVERY_ZONE,
          deliverable
        })
        debugger
      })
    }
  },
}
