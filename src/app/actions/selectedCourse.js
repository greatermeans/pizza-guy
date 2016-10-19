import A from '../const/actionTypes'

export default {
  selectedCourse: (courseId) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.UPDATED_SELECTED_COURSE,
        courseId
      })
    }
  }
}
