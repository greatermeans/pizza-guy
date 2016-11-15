import React from 'react'
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

const Marker = () => {
  return (
    <span style={styles.marker}>
      <PizzaIcon style={styles.image}/>
    </span>
  )
}

export default Marker
