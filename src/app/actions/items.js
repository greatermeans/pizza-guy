import A from '../const/actionTypes'
import actions from '.'
import firebaseService from '../infrastructure/FirebaseService'

export default {
  getItems: () => {
    return (dispatch, getState) => {
      dispatch(actions.startDataRequest('items'))
      firebaseService.subscribe('items', (result) => {
        dispatch(actions.endDataRequest('items'))
        const items = result.val() || {}
        dispatch({
          type: A.SET_ITEMS,
          items
        })
        dispatch(actions.processCategorizedItems())
      })
    }
  },
  processCategorizedItems: () => {
    return (dispatch, getState) => {
      const { categories, items, } = getState()
      let categorizedItems = []
      Object.keys(categories).map(categoryId => {
        let itemsForCategory = []
        Object.keys(items.raw).map(itemId => {
          if (items.raw[itemId].categoryId === categoryId) {
            itemsForCategory.push({
              ...items.raw[itemId],
              itemId
            })
          }
        })
        categorizedItems.push({
          ...categories[categoryId],
          categoryId,
          items: itemsForCategory
        })
      })
      dispatch({
        type: A.SET_CATEGORIZED_ITEMS,
        categorizedItems
      })
    }
  },
}
