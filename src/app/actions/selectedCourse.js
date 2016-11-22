import A from '../const/actionTypes'

export default {
  selectCourse: (courseId) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.UPDATE_SELECTED_COURSE,
        courseId
      })
    }
  }
}
