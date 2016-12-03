import A from '../const/actionTypes'

export default function (currentState, action) {
  let updatedState = currentState
  switch (action.type) {
    case A.ADD_ITEM:
      return [
        ...currentState,
        action.item
      ]
    case A.UPDATE_ITEM:
      updatedState[action.updatedItemIndex] = action.item
      return [
        ...updatedState
      ]
    default:
      return currentState || []
  }
}
