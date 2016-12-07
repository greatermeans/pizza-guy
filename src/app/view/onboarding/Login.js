import React, { Component, PropTypes as T } from 'react'
import AuthService from '../../utils/AuthService'
import { RaisedButton } from 'material-ui'

export default class Login extends Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props

    return (
      <div >
        <h2>Login</h2>
        <RaisedButton
          style={{marginTop: 15, marginBottom: 15}}
          primary
          label={'Login'}
          onClick={auth.login.bind(this)}
        />
      </div>
    )
  }
}
