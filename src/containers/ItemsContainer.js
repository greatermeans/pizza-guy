import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Item from '../components/Item'
import { addItem } from '../actions/cart'

class ItemsContainer extends Component {

  handleClick(event) {
    event.preventDefault()
    var { activeRestaurant, cart, addItem } = this.props
    var itemId = parseInt(event.target.dataset.id)
    if (cart.map(cartItem => cartItem.id).includes(itemId)) {
      return null
    }
    var item = activeRestaurant.restaurant.items.find(item => item.id === itemId)
    item.quantity = 1
    addItem(item)
  }

  render() {
    const { restaurant, activeCourse } = this.props.activeRestaurant
    var relevantItems
    
    if (restaurant) {
      if (activeCourse.name === 'featured') {
        relevantItems = restaurant.items.filter(item => {
          return item.featured === true
        })
      } else {
        relevantItems = restaurant.items.filter(item => { // omg refactor this
          return item.course_id === activeCourse.id
        })
      }
      return <div>{relevantItems.map(item => <Item {...item} onClick={this.handleClick.bind(this)}/>)}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
