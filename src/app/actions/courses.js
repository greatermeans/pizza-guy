import axios from 'axios'
import A from '../const/actionTypes'
import globalConfig from '../const/globalConfig'

export default {
  getCourses: () => {
    return (dispatch, getState) => {
      let restaurantId = getState().restaurant.id
      let courses = axios.get(`${globalConfig.ROOT_URL}/courses/`, {restaurantId: restaurantId})
      dispatch({
        type: A.CACHE_COURSES,
        courses
      })
    }
  }
}
