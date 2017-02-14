import A from '../const/actionTypes'

export default (currentState, action) => {
  let updatedState = { ...currentState }

  switch (action.type) {
    case A.END_DATA_REQUEST:
      delete updatedState.requests[action.requestId]
      break
    case A.UPDATE_UI:
      updatedState = Object.assign(updatedState, action.update)
      break
    case A.START_DATA_REQUEST:
      let requests = updatedState.requests || {}
      requests[action.requestId] = true
      updatedState.requests = requests
      break
  }

  return updatedState
}
