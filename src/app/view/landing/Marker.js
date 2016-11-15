import React, { Component, } from 'react'
import PizzaIcon from 'material-ui/svg-icons/maps/local-pizza'

const styles = {
  image: {
    width: 30,
    height: 'auto',
    color: 'af0000',
    opacity: 0.6,
  },
  marker: {
    cursor: 'pointer',
  }
}

export default class Marker extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span style={styles.marker}>
        <PizzaIcon style={styles.image}/>
      </span>
    )
  }
}
