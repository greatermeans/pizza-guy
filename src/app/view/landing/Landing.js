import React, { Component } from 'react'
import CartView from '../cart/CartView'
import WholesomeView from '../menu/WholesomeView'

export default class Landing extends Component {

  render() {
    return (
      <div className={'container'}>
        <WholesomeView/>
        <CartView/>
      </div>
    )
  }
}
