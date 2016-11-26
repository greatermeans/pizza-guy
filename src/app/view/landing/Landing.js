import React, { Component } from 'react'
import CartView from '../cart/CartView'
import MenuView from '../menu/MenuView'

export default class Landing extends Component {

  render() {
    return (
      <div className={'container'}>
        <MenuView/>
        <CartView/>
      </div>
    )
  }
}
