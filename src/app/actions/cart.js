import A from '../const/actionTypes'
import actions from '.'
import firebaseService from '../infrastructure/FirebaseService'

export default {
  addItem: () => {
    return (dispatch, getState) => {
      const {
        instructions, itemType, quantity, selectedItem, itemCost,
      } = getState().itemManagement
      const auth = getState().auth
      let item = {
        instructions,
        itemCost,
        itemId: selectedItem.itemId,
        itemType,
        itemName: selectedItem.itemName,
        quantity,
      }
      firebaseService.add(`cart/${auth.uid}`, item)
    }
  },
  addOrIncrementItem: () => {
    return (dispatch, getState) => {
      const { itemType, selectedItem, } = getState().itemManagement
      const { cartItems, } = getState().cart
      let existingItemId = Object.keys(cartItems).find(cartItemId => (
        cartItems[cartItemId].itemType === itemType &&
        cartItems[cartItemId].itemId === selectedItem.itemId
      ))
      existingItemId ?
      dispatch(actions.incrementItem(existingItemId)) : dispatch(actions.addItem())
    }
  },
  clearCart: () => {
    return (dispatch, getState) => {
      const auth = getState().auth
      firebaseService.remove(`cart/${auth.uid}`)
    }
  },
  getCartItems: () => {
    return (dispatch, getState) => {
      const auth = getState().auth
      firebaseService.subscribe(`cart/${auth.uid}`, (result) => {
        const cartItems = result.val() || {}
        dispatch({
          type: A.SET_CART_ITEMS,
          cartItems
        })
      })
    }
  },
  incrementItem: (existingItemId) => {
    return (dispatch, getState) => {
      const { itemCost, quantity, } = getState().itemManagement
      const { cartItems, } = getState().cart
      const auth = getState().auth
      let incrementedItem = {
        ...cartItems[existingItemId],
        itemCost: cartItems[existingItemId].itemCost += itemCost,
        quantity: cartItems[existingItemId].quantity += quantity,
      }
      firebaseService.update(
        `cart/${auth.uid}/${existingItemId}`,
        incrementedItem
      )
    }
  },
  removeItem: (cartItemId) => {
    return (dispatch, getState) => {
      const auth = getState().auth
      firebaseService.remove(`cart/${auth.uid}/${cartItemId}`)
    }
  },
  showAddItemToCartDialog: (addItemForm) => {
    return (dispatch, getState) => {
      const { selectedItem, } = getState().itemManagement
      dispatch(actions.setQuantity(1))
      dispatch(actions.setInstructions(''))
      dispatch(actions.setItemType(Object.keys(selectedItem.types)[0]))
      dispatch(actions.showDialog({
        acceptCallback: () => dispatch(actions.addOrIncrementItem()),
        acceptCaption: 'ADD TO CART',
        title: selectedItem.itemName,
        subtitle: selectedItem.itemDescription,
        content: addItemForm,
        rejectCaption: 'CANCEL',
      }))
    }
  },
  showEditItemInCartDialog: (cartItemId, editItemForm) => {
    return (dispatch, getState) => {
      const { cartItems, } = getState().cart
      const {
        instructions, itemDescription, itemId, itemName, itemType, quantity,
      } = cartItems[cartItemId]
      const items = getState().items.raw
      dispatch(actions.setSelectedItem({
        ...items[itemId],
        itemId
      }))
      dispatch(actions.setQuantity(quantity))
      dispatch(actions.setInstructions(instructions))
      dispatch(actions.setItemType(itemType))
      dispatch(actions.showDialog({
        acceptCallback: () => dispatch(actions.updateOrIncrementItem(cartItemId)),
        acceptCaption: 'SAVE CHANGES',
        title: itemName,
        subtitle: itemDescription,
        content: editItemForm,
        rejectCaption: 'CANCEL',
      }))
    }
  },

  showEmptyCartDialog: () => {
    return (dispatch, getState) => {
      let title = 'Are you sure you want to empty your cart?'
      dispatch(actions.showDialog({
        acceptCallback: () => dispatch(actions.clearCart()),
        acceptCaption: 'YES',
        title,
        rejectCaption: 'NO',
      }))
    }
  },
  showRemoveItemDialog: (cartItemId) => {
    return (dispatch, getState) => {
      const { cartItems, } = getState().cart
      const cartItem = cartItems[cartItemId]
      let title = `Are you sure you want to remove ${cartItem.itemName}?`
      dispatch(actions.showDialog({
        acceptCallback: () => dispatch(actions.removeItem(cartItemId)),
        acceptCaption: 'YES',
        title,
        rejectCaption: 'NO',
      }))
    }
  },
  updateItem: (cartItemId) => {
    return (dispatch, getState) => {
      const {
        instructions, itemType, quantity, selectedItem, itemCost,
      } = getState().itemManagement
      const auth = getState().auth
      let item = {
        instructions,
        itemCost,
        itemId: selectedItem.itemId,
        itemType,
        itemName: selectedItem.itemName,
        quantity,
      }
      firebaseService.update(
        `cart/${auth.uid}/${cartItemId}`,
        item
      )
    }
  },
  updateOrIncrementItem: (cartItemId) => {
    return (dispatch, getState) => {
      const { itemType, selectedItem, } = getState().itemManagement
      const { cartItems, } = getState().cart
      let existingItemId = Object.keys(cartItems).find(cartItemId => (
        cartItems[cartItemId].itemType === itemType &&
        cartItems[cartItemId].itemId === selectedItem.itemId
      ))
      let itemTypesAreDifferent = existingItemId &&
        cartItems[existingItemId].itemType !==
        cartItems[cartItemId].itemType

      if (itemTypesAreDifferent) {
        dispatch(actions.incrementItem(existingItemId))
        dispatch(actions.removeItem(cartItemId))
      } else {
        dispatch(actions.updateItem(cartItemId))
      }
    }
  },
}
