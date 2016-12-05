import A from '../const/actionTypes'
import _ from 'lodash'

export default {
  addItem: (addedItem) => {
    return (dispatch, getState) => {
      let { itemId, instructions, quantity, type, } = addedItem
      let matchedItem = getState().cart.filter(cartItem =>
        cartItem.itemId === itemId
      ).find(item => item.type === type)
      let newQuantity = matchedItem ? matchedItem.quantity + quantity : quantity
      let item = {itemId, instructions, quantity: newQuantity, type, }
      let updatedItemIndex = matchedItem ? _.findIndex(getState().cart,
        { 'itemId': itemId, 'type': type }) : null
      matchedItem ?
        dispatch({
          type: A.UPDATE_ITEM,
          updatedItemIndex,
          item
        }) :
        dispatch({
          type: A.ADD_ITEM,
          item,
        })
    }
  },
  changeQuantity: ({item, quantity}) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.CHANGE_QUANTITY,
        item,
        quantity
      })
    }
  },
  clearCart: () => {
    return (dispatch, getState) => {
      dispatch({
        type: A.CLEAR_CART
      })
    }
  },
  removeItem: (itemId, typeId) => {
    return (dispatch, getState) => {
      let itemIndex = _.findIndex(getState().cart, { 'itemId': itemId, 'type': typeId })
      dispatch({
        type: A.REMOVE_ITEM,
        itemIndex
      })
    }
  },
  updateItem: (addedItem) => {
    return (dispatch, getState) => {
      let { itemId, instructions, quantity, type, } = addedItem
      let matchedItem = getState().cart.filter(cartItem =>
        cartItem.itemId === itemId
      ).find(item => item.type === type)
      let item = {itemId, instructions, quantity, type, }
      let updatedItemIndex = matchedItem ? _.findIndex(getState().cart,
        { 'itemId': itemId, 'type': type }) : null
      dispatch({
        type: A.UPDATE_ITEM,
        updatedItemIndex,
        item
      })
    }
  },
}
