import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import React from 'react'
import { Provider, } from 'react-redux'
import { render, } from 'react-dom'
import { StyleRoot } from 'radium'
import { syncHistoryWithStore, } from 'react-router-redux'
import { Router, browserHistory, } from 'react-router'
import actions from './actions'
import Config from './config'
import firebase from 'firebase'
import firebaseService from './infrastructure/FirebaseService'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Routes from './Routes'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const firebaseConfig = {
  apiKey: Config.API_KEY,
  authDomain: Config.PROJECT_ID + '.firebaseapp.com',
  databaseURL: 'https://' + Config.PROJECT_ID + '.firebaseio.com',
  storageBucket: Config.PROJECT_ID_FOR_BUCKET + '.appspot.com',
}
const history = syncHistoryWithStore(browserHistory, store)

firebase.initializeApp(firebaseConfig)
firebaseService.initialize(firebase)

function initApp() {
  store.dispatch(actions.startListeningToAuth())
}

window.onload = function () {
  initApp()
}

injectTapEventPlugin()

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <StyleRoot>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
          {Routes}
        </Router>
      </StyleRoot>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
