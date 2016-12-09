import React, { Component } from 'react'
import CartView from '../cart/CartView'
import NewAddressForm from './NewAddressForm'
export default class Checkout extends Component {
  render() {
    return (
      <div className={'container'}>
        <NewAddressForm />
        <CartView/>
      </div>
		)
  }
}
