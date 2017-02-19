import A from '../const/actionTypes'

export default function (currentState, action) {
  let updatedState = { ...currentState }
  switch (action.type) {
    case A.ADD_ITEM_TO_CART:
      updatedState.cartItems.push(action.item)
      updatedState.cartTotal += action.item.itemCost
      break
    case A.REMOVE_ITEM:
      updatedState.cartItems.splice(action.itemIndex, 1)
      break
    case A.SET_CART_ITEMS:
      updatedState.cartItems = action.cartItems
      break
    case A.UPDATE_ITEM_IN_CART:
      //how to deal with someone changing the size??
      break
  }
  return updatedState
}
