import { push } from 'react-router-redux'

export default {
  changePath: (path) => {
    return (dispatch, getState) => {
        dispatch(push(path))
    }
  },
}
