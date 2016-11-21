import A from '../const/actionTypes'

export default {
  addItem: (item) => {
    return (dispatch, getState) => {
      let { id, instructions, quantity, type, } = item
      let proto = {}
      proto['type'] = A.ADD_ITEM
      proto['item'] = {}
      proto['item'][id] = { instructions, quantity, type, }
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
