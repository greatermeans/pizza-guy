import A from '../const/actionTypes'

export default (currentState, action) => {
  let updatedState = { ...currentState }

  switch (action.type) {
    case A.SET_USER_ADDRESSES:
      updatedState.addresses = action.addresses
      break
  }

  return updatedState
}
