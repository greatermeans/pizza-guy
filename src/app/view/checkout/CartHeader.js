import React from 'react'

const CartHeader = ({cart}) => {
  if (cart.length === 0) {
    return <div>Your cart is empty!</div>
  }
  return <div>Your cart:</div>
}

export default CartHeader
