import A from '../const/actionTypes'
import actions from '.'
import _ from 'lodash'

export default {
  addItem: () => {
    return (dispatch, getState) => {
      const {
        instructions, itemType, quantity, selectedItem, itemCost,
      } = getState().itemManagement
      let item = {
        instructions,
        itemCost,
        itemId: selectedItem.itemId,
        itemType,
        itemName: selectedItem.itemName,
        quantity,
      }
      dispatch({
        type: A.ADD_ITEM_TO_CART,
        item
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
  showAddItemToCartDialog: (addItemForm) => {
    return (dispatch, getState) => {
      const { selectedItem, } = getState().itemManagement
      dispatch(actions.setQuantity(1))
      dispatch(actions.setInstructions(''))
      dispatch(actions.setItemType(Object.keys(selectedItem.types)[0]))
      dispatch(actions.showDialog({
        acceptCallback: () => dispatch(actions.addItem()),
        acceptCaption: 'ADD ITEM',
        title: selectedItem.itemName,
        subtitle: selectedItem.itemDescription,
        content: addItemForm,
        rejectCaption: 'CANCEL',
      }))
    }
  },
  showEditItemInCartDialog: (createTeamForm) => {
    return (dispatch, getState) => {

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
