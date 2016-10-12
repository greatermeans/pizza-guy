import React from 'react'
import { render, } from 'react-dom'
import { Router, browserHistory, } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Routes from './Routes'
import store from './store'
import { Provider, } from 'react-redux'
import { syncHistoryWithStore, } from 'react-router-redux'

injectTapEventPlugin()

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      {Routes}
    </Router>
  </Provider>
  , document.getElementById('app'))
