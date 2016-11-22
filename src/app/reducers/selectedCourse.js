import A from '../const/actionTypes'

export default (currentState, action) => {
  switch (action.type) {
    case A.UPDATE_SELECTED_COURSE:
      return action.courseId || null
    default:
      return currentState || null
  }
}
