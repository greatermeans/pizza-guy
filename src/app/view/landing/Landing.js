import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import { connect } from 'react-redux'
import { checkDeliveryZone } from '../../actions/restaurant'
import actions from '../../actions'
import { Paper } from 'material-ui'
import GoogleMap from 'google-map-react'
import Marker from './Marker'
import MenuView from '../menu/MenuView'

class Landing extends Component {

  render() {
    return (
      <div>
        <Paper style={styles.menu} zDepth={3} rounded >
          <MenuView />
        </Paper>
        <Paper style={styles.mapPaper} zDepth={1} rounded={false}>
          <div style={styles.map}>
            <GoogleMap
              center={{lat: 59.6205245, lng: 17.843808}}
              zoom={12}
            >
              <Marker
                lat={59.6205245}
                lng={17.843808}
              />
            </GoogleMap>
          </div>
        </Paper>
      </div>
    )
  }
}

const styles = {
  map: {
    margin: 20,
    width: 200,
    height: 'auto'
  },
  mapPaper: {
    height: 300,
    width: 300,
    textAlign: 'center',
    float: 'right'
  },
  menu: {
    width: 1000,
    height: 600,
    margin: 30,
    float: 'left',
    textAlign: 'left'
  },
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkDeliveryZone: (address) => dispatch(actions.checkDeliveryZone(address))
  }
}

export default connect(null, mapDispatchToProps)(Landing)
