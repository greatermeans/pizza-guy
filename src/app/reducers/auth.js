import A from '../const/actionTypes'

export default (currentState, action) => {
  let updatedState = Object.assign({}, currentState)

  switch (action.type) {
    case A.LOGGING_IN:
      updatedState.username = 'guest'
      break
    case A.DISPLAY_AUTH_ERROR:
      updatedState.error = action.error
      break
    case A.LOGOUT:
      updatedState = {
        username: 'guest',
        error: updatedState.error
      }
      break
    case A.SET_TOKEN:
      updatedState = {
        ...updatedState,
        token: action.token,
      }
      break
    case A.SET_TOKEN_CONFIGURED:
      updatedState = {
        ...updatedState,
        tokenConfigured: true,
      }
      break
    case A.LOGIN:
      updatedState.error = null
      updatedState.status = 'LOGGED_IN'
      updatedState.username = action.username
      updatedState.uid = action.uid
      updatedState.email = action.email
      updatedState.photoURL = action.photoURL
      break
  }

  return updatedState
}
