import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CartContainer from '../containers/CartContainer'
import CoursesContainer from '../containers/CoursesContainer';
import ItemsContainer from '../containers/ItemsContainer'
import { fetchRestaurant } from '../actions/restaurants'
import { Link } from 'react-router'

class Restaurant extends Component {

  componentWillMount() {
    var {params, fetchRestaurant} = this.props
    fetchRestaurant(params.id)
  }

  render() {
    return (
      <div>
        <CartContainer />
        <CoursesContainer />
        <ItemsContainer />
        <Link to='/checkout'>Checkout</Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchRestaurant}, dispatch)
}

export default connect(null, mapDispatchToProps)(Restaurant);
