import A from '../const/actionTypes'

export default function (currentState, action) {

  switch (action.type) {
    case A.FETCH_RESTAURANT:
      return {
        ...currentState,
        ...action.data
      }
    default:
      return currentState || {}
  }
}
