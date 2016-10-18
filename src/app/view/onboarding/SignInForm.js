import React, { Component } from 'react'
import { Link } from 'react-router'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default class SignInForm extends Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) }
  }

  componentDidMount() {
    this.refs.email
      .getRenderedComponent()
      .getRenderedComponent()
      .focus()
  }


  render() {
    const { signIn, handleSubmit, pristine, reset, submitting } = this.props
    
    return (

      <form onSubmit={handleSubmit(signIn.bind(this))}>
        <div>
          <Field name="email" component={TextField} hintText="Email" 
            floatingLabelText="Email" ref="email" withRef/>
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
          <h5> Don't Have an account? <Link to="/register" className="btn btn-error">Sign Up!</Link> </h5>
        </div>
      </form>
    )
  }
}