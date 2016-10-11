import axios from 'axios';
import globalConfig from './index.js'

export const CHECK_DELIVERY_ZONE = 'CHECK_DELIVERY_ZONE'
export const FETCH_RESTAURANT = 'FETCH_RESTAURANT'
export const CHANGE_ACTIVE_COURSE = 'CHANGE_ACTIVE_COURSE'
export const CHANGE_ACTIVE_CATEGORY = 'CHANGE_ACTIVE_CATEGORY'

const ROOT_URL = globalConfig.API
const HEADER = globalConfig.header

export function fetchRestaurant(restaurantId) {
  var request = axios.get(`${ROOT_URL}/restaurants/${restaurantId}`)
  return {
    type: FETCH_RESTAURANT,
    payload: request
  }
}

export function checkDeliveryZone(addressValues) {
  var address = addressValues.gmaps.formatted_address
  var request = axios.post(`${ROOT_URL}/check_delivery_zone`, {address: address});
  return {
    type: CHECK_DELIVERY_ZONE,
    payload: request
  }
}

export function changeActiveCourse(course) {
  return {
    type: CHANGE_ACTIVE_COURSE,
    payload: course
  }
}

export function changeActiveCategory(activeCategory,activeRestaurants) {
  return {
    type: CHANGE_ACTIVE_CATEGORY,
    payload: {activeCategory,activeRestaurants}
  }
}
