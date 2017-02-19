import A from '../const/actionTypes'

export default (currentState, action) => {
  let updatedState = { ...currentState }
  switch (action.type) {
    case A.SET_INSTRUCTIONS:
      updatedState.instructions = action.instructions
      break
    case A.SET_ITEM_TYPE:
      updatedState.itemType = action.itemType
      break
    case A.SET_QUANTITY:
      updatedState.quantity = action.quantity
      break
    case A.SET_SELECTED_ITEM:
      updatedState.selectedItem = action.selectedItem
      break
    case A.SET_SELECTED_ITEM_COST:
      updatedState.itemCost = action.itemCost
      break
  }
  return updatedState
}
