import A from '../const/actionTypes'
import actions from '.'

export default {
  setInstructions: (instructions) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_INSTRUCTIONS,
        instructions
      })
    }
  },
  setItemType: (itemType) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_ITEM_TYPE,
        itemType
      })
      dispatch(actions.setSelectedItemCost())
    }
  },
  setQuantity: (quantity) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_QUANTITY,
        quantity
      })
      dispatch(actions.setSelectedItemCost())
    }
  },
  setSelectedItem: (selectedItem) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_SELECTED_ITEM,
        selectedItem
      })
    }
  },
  setSelectedItemCost: () => {
    return (dispatch, getState) => {
      const { itemType, quantity, selectedItem, } = getState().itemManagement
      let itemCost = quantity * selectedItem.types[itemType]
      dispatch({
        type: A.SET_SELECTED_ITEM_COST,
        itemCost
      })
    }
  },
}
