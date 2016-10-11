import React from 'react';
import { Link } from 'react-router';
// import RestaurantsTags from './RestaurantsTags'

const RestaurantBox = ({id, name, categories, full_address, logo}) => {
  return (
      <Link style={{color:'black'}} to={"restaurants/" + id}>
      	<img src={logo} alt={name} />
        <h3>{name}</h3>
        <h4>{full_address}</h4>
      </Link>
  )
}

export default RestaurantBox
