import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Item from '../components/Item'
import { addItem } from '../actions/cart'

classMenuItemsContainer extends Component {

  handleClick(event) {
    event.preventDefault()
    let { activeRestaurant, cart, addItem } = this.props
    let itemId = parseInt(event.target.dataset.id)
    if (cart.map(cartItem => cartItem.id).includes(itemId)) {
      return null
    }
    let item = activeRestaurant.restaurant.menuItems.find(item => item.id === itemId)
    item.quantity = 1
    addItem(item)
  }

  render() {
    const { restaurant, activeCourse } = this.props.activeRestaurant
    let relevantItems

    if (restaurant) {
      if (activeCourse.name === 'featured') {
        relevantItems = restaurant.menuItems.filter(item => {
          return item.featured === true
        })
      } else {
        relevantItems = restaurant.menuItems.filter(item => { // omg refactor this
          return item.course_id === activeCourse.id
        })
      }
      return (
        <div>
          {relevantItems.map(item => <Item {...item} onClick={this.handleClick.bind(this)}/>)}
        </div>
      )
    }
    return null
  }
}

function mapStateToProps(state) {
  return {
    activeRestaurant: state.restaurants.activeRestaurant, cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)
