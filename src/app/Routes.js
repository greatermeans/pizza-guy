import { Route, IndexRoute, } from 'react-router'
import AppWrapper from './ui/global/AppWrapper'
import LoginView from './view/authentication/LoginView'
import LogoutView from './view/authentication/LogoutView'
import OrderView from './view/orderManagement/OrderView'
import React from 'react'

const Routes = (
  <Route path="/" component={AppWrapper}>
    <IndexRoute component={LoginView}/>
    <Route path="/logout" component={LogoutView}/>
    <Route path="/order" component={OrderView}/>
  </Route>
)

export default Routes
