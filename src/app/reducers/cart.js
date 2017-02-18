import A from '../const/actionTypes'

export default function (currentState, action) {
  let updatedState = {...currentState}
  switch (action.type) {
    case A.ADD_ITEM_TO_CART:
      updatedState.cartItems.push(action.item)
      updatedState.cartTotal += action.item.itemCost
      break
    case A.CLEAR_CART:
      updatedState.cartItems = []
      break
    case A.REMOVE_ITEM:
      updatedState.cartItems.splice(action.itemIndex, 1)
      break
    case A.UPDATE_ITEM:
      updatedState.cartItems[action.updatedItemIndex] = action.item
      break
  }
  return updatedState
}
