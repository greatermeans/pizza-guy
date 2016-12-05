import React from 'react'
import Geosuggest from 'react-geosuggest'

const styles = {
  addressSearch: {
    width: 250,
    marginLeft: 20,
  }
}

const EnterAddress = ({checkDeliveryZone, deliverable}) => {

  return (
    <div style={styles.addressSearch}>
      <Geosuggest
        placeholder={'Street Address, City, Country'}
        onSuggestSelect={checkDeliveryZone}
        location={new google.maps.LatLng(62.2315, 16.1932)}
        country="SE"
        radius="1000"
      />
    </div>
  )
}

export default EnterAddress
