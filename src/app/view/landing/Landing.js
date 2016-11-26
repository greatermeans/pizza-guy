import React, { Component } from 'react'
import CartView from '../cart/CartView'
import WholesomeView from '../menu/WholesomeView'

export default class Landing extends Component {

  render() {
    return (
      <div style={styles.container}>
        <WholesomeView/>
        <CartView/>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
  },
}
