import React, { Component } from 'react'
import CartView from '../cart/CartView'
import NewAddress from './NewAddress'
export default class Checkout extends Component {
  render() {
    return (
      <div className={'container'}>
        <NewAddress />
        <CartView/>
      </div>
		)
  }
}
