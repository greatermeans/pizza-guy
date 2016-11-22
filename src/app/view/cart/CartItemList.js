import React from 'react'

const styles = {
  cartItemList: {

  }
}

const CartItemList = ({cart}) => {
  let formattedItems = cart.map(item => {
    return (
      <div>

      </div>
    )
  })
  return (
    <div style={styles.cartItemList}>

    </div>
  )
}

export default CartItemList
