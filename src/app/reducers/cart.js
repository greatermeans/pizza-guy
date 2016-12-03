import A from '../const/actionTypes'

export default function (currentState, action) {
  let newState, index

  switch (action.type) {
    case A.ADD_ITEM:
      return [
        ...currentState,
        action.item
      ]
    case A.UPDATE_ITEM:
      let updatedState = currentState
      updatedState[action.updatedItemIndex] = action.item
      return [
        ...updatedState
      ]
    case A.REMOVE_ITEM:
      newState = [].concat(currentState) // CODE IS REUSED, REFACTOR
      index = newState.indexOf(action.payload)
      newState.splice(index, 1)
      return newState
    default:
      return currentState || []
  }
}
