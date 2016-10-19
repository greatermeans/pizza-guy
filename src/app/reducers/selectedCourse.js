import initialState from '../store/initialState'
import A from '../const/actionTypes'

export default function (currentState, action) {

  switch (action.type) {
    case A.UPDATED_SELECTED_COURSE:
      return {
        ...currentState,
        selectedCourse: action.courseId
      }
    default:
      return currentState || initialState.selectedCourse
  }
}
