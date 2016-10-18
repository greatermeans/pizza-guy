import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import { connect } from 'react-redux'
import { checkDeliveryZone } from '../../actions/restaurant'
import actions from '../../actions'

class Landing extends Component {

  render() {
    const { checkDeliveryZone } = this.props
    return (
      <div id="container">
      <h1>The Delivery Team</h1>
      <h2 className="subheader">Who Delivers in Your Neighborhood?</h2>
      <Geosuggest
        placeholder="Street Address, City, Country"
        onSuggestSelect={checkDeliveryZone}
        location={new google.maps.LatLng(62.2315, 16.1932)}
        country="SE"
        radius="1000" />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkDeliveryZone: (address) => dispatch(actions.checkDeliveryZone(address))
  }
}

export default connect(null, mapDispatchToProps)(Landing)
