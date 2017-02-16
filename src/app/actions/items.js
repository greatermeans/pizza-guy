import A from '../const/actionTypes'
import firebaseService from '../infrastructure/FirebaseService'
import actions from '.'

export default {
  getItems: () => {
    return (dispatch, getState) => {
      firebaseService.subscribe('items', (result) => {
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
