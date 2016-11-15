import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import { connect } from 'react-redux'
import { checkDeliveryZone } from '../../actions/restaurant'
import actions from '../../actions'
import { Paper } from 'material-ui'
import GoogleMap from 'google-map-react'
import Marker from './Marker'

class Landing extends Component {

  render() {
    return (
      <div>
        <Paper style={styles.paper} zDepth={1} rounded={false}>
          Hello World
          <GoogleMap styles={styles.map} center={{lat: 59.6205245, lng: 17.843808}} zoom={12}>
            <Marker lat={59.6205245} lng={17.843808} />
          </GoogleMap>
        </Paper>
      </div>
    )
  }
}

const styles = {
  map: {

  },
  nothing: {

  },
  paper: {
    height: 300,
    width: 300,
    textAlign: 'center',
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkDeliveryZone: (address) => dispatch(actions.checkDeliveryZone(address))
  }
}

export default connect(null, mapDispatchToProps)(Landing)
