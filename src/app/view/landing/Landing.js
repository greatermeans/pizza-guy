import React, { Component } from 'react'
import CartView from '../cart/CartView'
import MenuView from '../menu/MenuView'

export default class Landing extends Component {

  render() {
    return (
      <div style={styles.container}>
        <MenuView style={styles.menu}/>
        <CartView style={styles.cart}/>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
  },
}
