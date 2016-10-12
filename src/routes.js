import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { StyleRoot, } from 'radium'
import Landing from './view/landing/Landing'
import AppWrapper from './global_ui/AppWrapper'

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
