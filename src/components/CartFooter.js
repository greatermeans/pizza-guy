import React from 'react'

const CartFooter = ({total}) => {
  if (total === 0) {
    return null
  }
  return <div>subtotal | {total}</div>
}

export default CartFooter
