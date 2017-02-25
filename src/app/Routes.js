import { Route, IndexRoute, } from 'react-router'
import AppWrapper from './ui/global/AppWrapper'
import CheckoutView from './view/checkoutManagement/CheckoutView'
import ConfirmAddressView from './view/checkoutManagement/ConfirmAddressView'
import LoginView from './view/authentication/LoginView'
import LogoutView from './view/authentication/LogoutView'
import OrderView from './view/orderManagement/OrderView'
import React from 'react'

const Routes = (
  <Route path="/" component={AppWrapper}>
    <IndexRoute component={LoginView}/>
    <Route path="/checkout" component={CheckoutView}/>
    <Route path="/confirmAddress" component={ConfirmAddressView}/>
    <Route path="/logout" component={LogoutView}/>
    <Route path="/order" component={OrderView}/>
  </Route>
)

export default Routes
