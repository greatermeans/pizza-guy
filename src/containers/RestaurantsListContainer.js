import React from 'react';
import { connect } from 'react-redux';
import RestaurantsList from '../components/RestaurantsList';
import RestaurantBox from '../components/RestaurantBox';

const mapStateToProps = (state) => {
  return {
    restaurantsList: state.restaurants.activeCategory.activeRestaurantsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderRestaurants: (restaurants) => {
    	return restaurants.map((restaurant) => {
	      return (
	        <li className="restaurant-box" key={restaurant.id}>
	          <RestaurantBox {...restaurant} />
	        </li>
	      )
    	})
  	}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);
