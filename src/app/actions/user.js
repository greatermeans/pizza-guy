import A from '../const/actionTypes'
import actions from '../actions'

export default {
  checkDeliveryZone: (addressValues) => {
    return (dispatch, getState) => {
      debugger
      let address = addressValues.gmaps.formatted_address
      let service = new google.maps.DistanceMatrixService()
      service.getDistanceMatrix({
        origins: [address],
        destinations: ['Fagelvagen 13, Marsta, Sweden'],
        travelMode: 'DRIVING'
      }, (response) => {
        let distance = response.rows[0].elements[0].distance && response.rows[0].elements[0].distance.value
        let deliverable = distance < 20000
        let addressComponents = response.originAddresses[0].split(', ')
        let street = addressComponents[0]
        let postalAndCity = addressComponents[1].split(' ')
        let postal = postalAndCity[0] + ' ' + postalAndCity[1]
        let city = postalAndCity[2]
        let country = addressComponents[2]
        let address = {deliverable, street, postal, city, country}
        dispatch({
          type: A.NEW_ADDRESS,
          address
        })
      })
    }
  },
  submitNewAddressForm: (data) => {
    debugger
    return (dispatch, getState) => {
      dispatch({
        type: A.COMPLETE_NEW_USER,
        data
      })
    }
  },
}
