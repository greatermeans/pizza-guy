import React from 'react'
import Geosuggest from 'react-geosuggest'

const styles = {
  headerStyle: {
    fontSize: 16,
    marginTop: 8
  },
  subheaderStyle: {
    fontSize: 10,
    marginTop: 6
  }
}

let text = {header: '', subheader: ''}

const EnterAddress = ({checkDeliveryZone, deliverable}) => {

  let changeHeader = (deliverable) => {
    if (deliverable === false) {
      text.header = 'Sorry, we don\'t deliver to you.'
      text.subheader = 'You can still order for takeout!'
    } else if (deliverable === true) {
      text.header = 'We deliver to this address!'
      text.subheader = 'Start ordering right away!'
    } else {
      text.header = 'Check to see if we deliver to you!'
      text.subheader = 'Test Subheader!'
    }
    return text
  }

  return (
    <div>
      <div style={styles.headerStyle}>
        {changeHeader(deliverable).header}
      </div>
      <div style={styles.subheaderStyle}>
        {changeHeader(deliverable).subheader}
      </div>
      <Geosuggest
        placeholder="Street Address, City, Country"
        onSuggestSelect={checkDeliveryZone}
        location={new google.maps.LatLng(62.2315, 16.1932)}
        country="SE"
        radius="1000"
      />
    </div>
  )
}

export default EnterAddress
