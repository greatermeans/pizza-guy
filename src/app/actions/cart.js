import A from '../const/actionTypes'

export default {
  addItem: (item) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.ADD_ITEM,
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
  removeItem: (item) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.REMOVE_ITEM,
        item
      })
    }
  },
}
