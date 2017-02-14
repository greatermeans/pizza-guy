import A from '../const/actionTypes'

export default {
  endDataRequest: (requestId) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.END_DATA_REQUEST,
        requestId
      })
    }
  },
  startDataRequest: (requestId) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.START_DATA_REQUEST,
        requestId
      })
    }
  },
  updateUI: (update) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.UPDATE_UI,
        update,
      })
      const UI = getState().UI

      let passwordError
      if (UI.password && (UI.password.length < 6)) {
        passwordError = 'Password needs to be 6 characters'
      } else {
        passwordError = null
      }

      let confirmPasswordError
      if (UI.password && (UI.password !== UI.confirmPassword)) {
        confirmPasswordError = 'Make sure passwords match'
      } else {
        confirmPasswordError = null
      }

      let isReadyToLogIn
      if (
          !passwordError &&
          UI.password &&
          UI.email
      ) {
        isReadyToLogIn = true
      } else {
        isReadyToLogIn = false
      }

      let isReadyToSignUp
      if (
          !passwordError &&
          !confirmPasswordError &&
          UI.password &&
          UI.email
      ) {
        isReadyToSignUp = true
      } else {
        isReadyToSignUp = false
      }

      dispatch({
        type: A.UPDATE_UI,
        update: {
          passwordError,
          confirmPasswordError,
          isReadyToLogIn,
          isReadyToSignUp,
        },
      })
    }
  },
  validateEmail: () => {
    return (dispatch, getState) => {
      let emailError
      const expression = new RegExp([
        '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)',
        '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])',
        '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
      ].join(''))
      const email = getState().UI.email
      if (
        !expression.test(email) &&
        email
      ) {
        emailError = 'Need a valid email address'
      } else {
        emailError = null
      }

      dispatch({
        type: A.UPDATE_UI,
        update: {
          emailError,
        },
      })
    }
  },
}
