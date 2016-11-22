import A from '../const/actionTypes'

export default {
  addItem: (addedItem) => {
    return (dispatch, getState) => {
      let { itemId, instructions, quantity, type, } = addedItem
      let proto = {}
      proto['type'] = A.ADD_ITEM
      proto['item'] = {}
      proto['item'][itemId] = { instructions, quantity, type, }
      dispatch(proto)
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
  removeItem: (item) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.REMOVE_ITEM,
        item
      })
    }
  },
}
