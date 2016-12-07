import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { StyleRoot, } from 'radium'
import AppWrapper from './global_ui/AppWrapper'
import Landing from './view/landing/Landing'
import AuthService from './utils/AuthService'
import Login from './view/onboarding/Login'
import Checkout from './view/checkout/Checkout'

const auth = new AuthService('Rss2h4EH3bRJHz0xWhsOsMKtKE1uHB9y', 'greatermeans.auth0.com')

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

const Routes = (
  <MuiThemeProvider>
    <StyleRoot>
      <Route path="/" component={AppWrapper} auth={auth}>
        <IndexRoute component={Landing} />
        <Route path="/checkout" component={Checkout} onEnter={requireAuth} />
        <Route path="/login" component={Login}/>
      </Route>
    </StyleRoot>
  </MuiThemeProvider>
)

export default Routes
