import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import { connect } from 'react-redux'
import { checkDeliveryZone } from '../../actions/restaurant'
import actions from '../../actions'
import { Paper } from 'material-ui'
import GoogleMap from 'google-map-react'
import Marker from './Marker'
import MenuView from '../menu/MenuView'
import EnterAddress from './EnterAddress'

class MapView extends Component {

  render() {
    var { checkDeliveryZone, deliverable } = this.props
    return (
      <Paper style={styles.paper} zDepth={1} rounded={false}>
        <EnterAddress checkDeliveryZone={checkDeliveryZone} deliverable={deliverable}/>
        <div style={styles.map}>
          <GoogleMap center={{lat: 59.6205245, lng: 17.843808}} zoom={12}>
            <Marker lat={59.6205245} lng={17.843808} />
          </GoogleMap>
        </div>
      </Paper>
    )
  }
}

const styles = {
  map: {
    height: 300,
    width: 300,
    position: ''
  },
  paper: {
    height: 400,
    width: 300,
    textAlign: 'center',
    float: 'right',
    margin: 18
  },
}

const mapStateToProps = (state) => {
  return {deliverable: state.user.deliverable}
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkDeliveryZone: (address) => dispatch(actions.checkDeliveryZone(address))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView)
