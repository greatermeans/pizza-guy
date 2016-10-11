import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router';
import Category from '../components/Course'
import { changeActiveCategory } from '../actions/restaurants'
import _ from 'lodash'

class CategoriesContainer extends Component {

  handleClick(event) {
    event.preventDefault()
    const {changeActiveCategory, restaurantsCategories, restaurantsList} = this.props

    var category = _.find(restaurantsCategories,{name: event.target.dataset.course})

    var restaurants = restaurantsList.map (restaurant => {
      if (_.find(restaurant.categories, category)) {
        return restaurant
      }
    })

    changeActiveCategory(category,_.compact(restaurants))
    browserHistory.push('/restaurants')
  }

  render() {
    const { restaurantsCategories } = this.props

    if (restaurantsCategories) {
      let filteredCategories = _.uniq(restaurantsCategories, function (c) {
          return c.id;
        });
      return (
        <ul className="category-list">{filteredCategories.map(category => {
          return (<li className="category-list-item">
            <Category {...category} onClick={this.handleClick.bind(this)} />
          </li>)
        })}</ul>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}

function mapStateToProps(state) {
  return {
    restaurantsCategories: state.restaurants.restaurantsCategories,
    restaurantsList: state.restaurants.restaurantsList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeActiveCategory}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
