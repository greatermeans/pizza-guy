import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { StyleRoot, } from 'radium'
import AppWrapper from './global_ui/AppWrapper'
import Landing from './view/landing/Landing'

const Routes = (
  <MuiThemeProvider>
    <StyleRoot>
      <Route path="/" component={AppWrapper}>
        <IndexRoute component={Landing} />
      </Route>
    </StyleRoot>
  </MuiThemeProvider>
)

export default Routes
