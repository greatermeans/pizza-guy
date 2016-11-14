import React, { Component, } from 'react'
import MapsLocalShipping from 'material-ui/svg-icons/maps/local-shipping'
import MapsPlace from 'material-ui/svg-icons/maps/place'

const customerMarkerLeftOffsets = 45
const customerMarkerTopOffsets = 39
const imageWidth = 20
const styles = {
  image: {
    width: imageWidth,
    marginLeft: -customerMarkerLeftOffsets / 2 - 4,
    marginTop: -customerMarkerTopOffsets,
  },
  marker: {
    cursor: 'pointer'
  }
}

export default class Marker extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span style={styles.marker}>
        { this.props.id === 'site' ?
          <MapsPlace style={styles.image}/> :
          <MapsLocalShipping style={styles.image}/>
        }
      </span>
    )
  }
}
