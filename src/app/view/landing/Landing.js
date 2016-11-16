import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapView from './MapView'
import { Paper } from 'material-ui'
import MenuView from '../menu/MenuView'

class Landing extends Component {

  render() {
    return (
      <div style={styles.container}>
        <MenuView />
        <MapView />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(null, mapDispatchToProps)(Landing)
