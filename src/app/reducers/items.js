import A from '../const/actionTypes'

export default (currentState, action) => {
  let updatedState = { ...currentState }

  switch (action.type) {
    case A.SET_ITEMS:
      updatedState.raw = action.items
      break
    case A.SET_CATEGORIZED_ITEMS:
      updatedState.categorizedItems = action.categorizedItems
      break
  }

  return updatedState
}
