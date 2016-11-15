import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapView from './MapView'

class Landing extends Component {

  render() {
    return (
      <div>
        <Paper style={styles.menu} zDepth={3} rounded >
          <MenuView />
        </Paper>
        <MapView />
      </div>
    )
  }
}

const styles = {
  map: {
    height: 220,
    width: 300,
    position: ''
  },

  nothing: {

  },
  paper: {
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
  }
}

export default connect(null, mapDispatchToProps)(Landing)
