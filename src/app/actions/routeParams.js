import { push, } from 'react-router-redux'

export default {
  routeTo: (route) => {
    return (dispatch, getState) => {
      let path = '/' + route
      dispatch(push(path))
    }
  },
}
