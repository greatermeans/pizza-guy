export default function(state = [], action) {
  var newState, index

  switch(action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
    case 'CHANGE_QUANTITY':
      newState = [].concat(state)
      index = newState.indexOf(action.item)
      newState[index].quantity = action.quantity
      return newState
    case 'REMOVE_ITEM':
      newState = [].concat(state) // CODE IS REUSED, REFACTOR
      index = newState.indexOf(action.payload)
      newState.splice(index, 1)
      return newState
    default:
      return state
  }
}
