import A from '../const/actionTypes'

export default (currentState, action) => {
  let updatedState = { ...currentState }

  switch (action.type) {
    case A.SHOW_DIALOG:
      updatedState = action.dialog
      updatedState.open = true
      break
    case A.HIDE_DIALOG:
      updatedState = {
        open: false,
      }
      break
  }

  return updatedState
}
