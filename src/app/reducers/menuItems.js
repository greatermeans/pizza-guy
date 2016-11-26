import A from '../const/actionTypes'

export default function (currentState, action) {
  switch (action.type) {
    case A.CACHE_MENU_ITEMS:
      return {
        ...currentState,
        ...action.data
      }
    default:
      return currentState || {}
  }
}
