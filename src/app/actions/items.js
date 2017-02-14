import A from '../const/actionTypes'
import * as d3 from 'd3'
import firebaseService from '../infrastructure/FirebaseService'
import _ from 'lodash'

export default {
  getItems: () => {
    return (dispatch, getState) => {
      firebaseService.subsribeByValue('items', (result) => {
        const items = result.val() || {}
        dispatch({
          type: A.SET_ITEMS,
          items
        })
      })
    }
  },
  sendMenuToDB: () => {
    return (dispatch, getState) => {
      d3.csv('/pizza.csv', (results) => {
        let stuff = _.uniqBy(
          results.map(res => _.omit(res, ['itemDescription', 'itemName', 'type', 'price'])),
          'courseName'
        )
        stuff = stuff.map(stuffum => {
          const {courseName, courseDescription} = stuffum
          let categoryName = courseName
          let categoryDescription = courseDescription
          return {categoryName, categoryDescription}
        })
        stuff.map(stuffum => firebaseService.add('categories', stuffum))
      })
    }
  }
}
