import initialState from '../store/initialState'
import A from '../const/actionTypes'

export default function (currentState, action) {
  switch (action.type) {
    case A.CACHE_COURSES:
      return {
        ...currentState,
        courses: action.courses
      }
    default:
      return currentState || initialState.selectedCourse
  }
}
