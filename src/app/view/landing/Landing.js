import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import { connect } from 'react-redux'
import { checkDeliveryZone } from '../../actions/restaurant'
import actions from '../../actions'

class Landing extends Component {

  render() {
    return (
      <div id="container">

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
