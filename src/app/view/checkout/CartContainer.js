import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CartHeader from '../components/CartHeader'
import CartItem from '../components/CartItem'
import CartFooter from '../components/CartFooter'
import { changeQuantity, removeItem } from '../actions/cart'
import _ from 'lodash'

class CartContainer extends Component {

  handleQuantity(event) {
    event.preventDefault()
    let { cart, changeQuantity } = this.props
    let { parentElement, value } = event.target
    let quantity = parseInt(value)
    let itemId = parseInt(parentElement.dataset.id)
    let item = cart.find(item => item.id === itemId)
    changeQuantity({item, quantity})
  }

  handleRemove(event) {
    event.preventDefault()
    let { cart, removeItem } = this.props
    let itemId = parseInt(event.target.parentElement.dataset.id) // CODE IS REUSED, REFACTOR
    let item = cart.find(item => item.id === itemId)
    removeItem(item)
  }

  render() {
    let { cart } = this.props
    let cartItems = cart.map(item => {
      return (
        <CartItem
          {...item}
          handleQuantity={this.handleQuantity.bind(this)}
          handleRemove={this.handleRemove.bind(this)}
        />
      )
    })
    let total = _.sum(cart.map(item => item.price*item.quantity))

    return (
      <div>
        <CartHeader cart={cart} />
        {cartItems}
        <CartFooter total={total} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {cart: state.cart}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeQuantity, removeItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
