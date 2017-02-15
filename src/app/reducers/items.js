import A from '../const/actionTypes'

export default (currentState, action) => {
  let updatedState = {...currentState}

  switch (action.type) {
    case A.SET_ITEMS:
      updatedState = action.items
      break
  }

  return updatedState
}
