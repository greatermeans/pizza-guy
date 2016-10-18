import A from '../const/actionTypes'

export default function (currentState, action) {
  let newState, index

  switch (action.type) {
    case A.ADD_ITEM:
      return [...currentState, action.payload]
    case A.CHANGE_QUANTITY:
      newState = [].concat(currentState)
      index = newState.indexOf(action.item)
      newState[index].quantity = action.quantity
      return newState
    case A.REMOVE_ITEM:
      newState = [].concat(currentState) // CODE IS REUSED, REFACTOR
      index = newState.indexOf(action.payload)
      newState.splice(index, 1)
      return newState
    default:
      return currentState
  }
}
