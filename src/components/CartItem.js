import React from 'react'

const CartItem = ({id, name, price, quantity, handleQuantity, handleRemove}) => {
  return (
    <div data-id={id}>
      {name} &nbsp;
      <input type='number' className="numberInput" value={quantity} onChange={handleQuantity} />
      <button onClick={handleRemove}>remove</button> &nbsp;
      {price*quantity}
    </div>
  )
}

export default CartItem
