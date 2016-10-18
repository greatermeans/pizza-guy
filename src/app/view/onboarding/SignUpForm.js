import React, { Component } from 'react'
import { Link } from 'react-router'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default class SignUpForm extends Component {

  getChildContext() {
      return { muiTheme: getMuiTheme(baseTheme) }
  }

  componentDidMount() {
    this.refs.first_name
      .getRenderedComponent()
      .getRenderedComponent()
      .focus()
  }

  render() {
    const { signUp, handleSubmit, pristine, reset, submitting } = this.props
    return (

      <form onSubmit={handleSubmit(signUp.bind(this))}>
        <div>
          <Field name="first_name" component={TextField} hintText="First Name" floatingLabelText="First Name"
            ref="first_name" withRef/>
        </div>
        <div>
          <Field name="last_name" component={TextField} hintText="Last Name" floatingLabelText="Last Name"
            ref="last_name" />
        </div>
        <div>
          <Field name="email" component={TextField} hintText="Email" 
            floatingLabelText="Email" ref="email"/>
        </div>
        <div>
          <Field name="password" component={TextField} type="password" 
            hintText="Password" floatingLabelText="Password" ref="password"/>
        </div>
        <div>
          <button type="submit" className="mdl-button" disabled={pristine || submitting}>Sign Up</button>
          <button type="button" className="mdl-button" disabled={pristine || submitting} onClick={reset}>Clear</button>
        </div> 
        <br />
        <div>
          <h5> Already signed up? <Link to="/signin" className="btn btn-error">Login!</Link> </h5>
        </div>
      </form>
    )
  }
}