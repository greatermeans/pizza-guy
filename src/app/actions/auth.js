import firebase from 'firebase'
import Config from '../config'
import A from '../const/actionTypes'
import actions from '.'
import store from '../store'

const onAuthData = (authData, dispatch, getState) => {
  if (authData.uid) {
    dispatch({
      type: A.LOGIN,
      uid: authData.uid,
      username: authData.displayName, // authData.github.displayName || authData.github.username
      email: authData.email,
      photoURL: authData.photoURL,
    })
    const token = getState().auth.token
    if (token) {
      if (!getState().auth.tokenConfigured) {
        onTokenAvailable(token, dispatch, getState)
      }
    } else {
      firebase.auth().currentUser.getToken(true)
      .then((idToken) => {
        dispatch({
          type: A.SET_TOKEN,
          token: idToken,
        })
        onAuthData(authData, dispatch, getState)
      })
    }
  } else {
    dispatch({
      type: A.LOGOUT,
    })
  }
}

const onTokenAvailable = (token, dispatch, getState) => {
  dispatch({
    type: A.SET_TOKEN_CONFIGURED,
  })
  dispatch(actions.handleRouteChange())
}

export default {
  login: () => {
    return (dispatch, getState) => {
      const UI = getState().UI
      firebase.auth().signInWithEmailAndPassword(UI.email, UI.password)
      .then((authResult) => {})
      .catch(
        (error) => {
          dispatch({
            type: A.DISPLAY_AUTH_ERROR,
            error: error.toString(),
          })
        }
      )
    }
  },
  loginWithGoogle: () => {
    return (dispatch, getState) => {
      dispatch({
        type: A.LOGGING_IN,
      })
      const provider = new firebase.auth.GoogleAuthProvider()
      Config.GOOGLE_SCOPES.map((scope) => provider.addScope(scope))
      firebase.auth().signInWithPopup(provider)
      .then((authResult) => {
        if (authResult && !authResult.error) {
          // sessionStorage.setItem(Config.GOOGLE_AUTH_TOKEN, authResult.credential.accessToken)
          // sessionStorage.setItem(Config.FIREBASE_AUTH_TOKEN, authResult.credential.accessToken)
        }
      })
      .catch(
        (error) => {
          dispatch({
            type: A.DISPLAY_AUTH_ERROR,
            error: error.toString(),
          })
          dispatch({
            type: A.LOGOUT,
          })
          // sessionStorage.removeItem(Config.GOOGLE_AUTH_TOKEN)
          // sessionStorage.removeItem(Config.FIREBASE_AUTH_TOKEN)
        }
      )
    }
  },
  logout: (error) => {
    return (dispatch, getState) => {
      firebase.auth().signOut()
      dispatch({
        type: A.LOGOUT,
      })
      if (error) {
        dispatch({
          type: A.DISPLAY_AUTH_ERROR,
          error
        })
      }
    }
  },
  signUp: () => {
    return (dispatch, getState) => {
      const UI = getState().UI
      firebase.auth().createUserWithEmailAndPassword(UI.email, UI.password)
      .then((authResult) => {})
      .catch(
        (error) => {
          dispatch({
            type: A.DISPLAY_AUTH_ERROR,
            error: error.toString(),
          })
        }
      )
    }
  },
  startListeningToAuth: () => {
    return (dispatch, getState) => {
      firebase.auth().onAuthStateChanged((authData) => {
        const route = store.getState().routeParams.route
        if (authData) {
          onAuthData(authData, dispatch, getState)
        } else {
          if (route !== '') {
            dispatch(actions.routeTo(''))
          }
          dispatch({
            type: A.LOGOUT,
          })
        }
      })
    }
  },
}
