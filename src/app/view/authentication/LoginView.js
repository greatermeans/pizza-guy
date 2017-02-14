import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import { Button, Card, CardActions, CardText, Content, Layout, Tab, Tabs, Textfield, } from 'react-mdl'
import actions from '../../actions'
import { palette, spacer } from '../../theme/Theme'
import Display3 from '../../ui/typography/Display3'
import Subheading from '../../ui/typography/Subheading'

class LoginView extends Component {
  constructor(props, context) {
    super(props, context)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this)
    this.signUp = this.signUp.bind(this)
    this.login = this.login.bind(this)
    this.selectTab = this.selectTab.bind(this)
  }

  signUp() {
    this.props.signUp()
  }

  login() {
    this.props.login()
  }

  selectTab(tabId) {
    this.props.updateUI({
      activeTab: tabId,
    })
  }

  onEmailChange(event) {
    this.props.updateUI({
      email: event.target.value,
    })
  }

  onPasswordChange(event) {
    this.props.updateUI({
      password: event.target.value,
    })
  }

  onConfirmPasswordChange(event) {
    this.props.updateUI({
      confirmPassword: event.target.value,
    })
  }

  render() {
    const { auth, UI, } = this.props
    return (
      <Layout>
        <Content style={Object.assign(styles.uTextCenter, styles.uMarginTop2)}>
          <Display3>Welcome!</Display3>
          <Tabs
            style={Object.assign(styles.uWidth20, styles.uMarginCenterH, styles.uMarginTop4)}

            activeTab={UI ? UI.activeTab : 0}
            onChange={(tabId) => this.selectTab(tabId)}
            ripple
          >
            <Tab>Sign In</Tab>
            <Tab>Create Account</Tab>
          </Tabs>
          <Card shadow={0} style={Object.assign(styles.uMarginCenterH, styles.uWidth20, styles.hideTabLine)}>
            <CardText>
              <Textfield
                label="Email address"
                floatingLabel
                onChange={this.onEmailChange}
                onBlur={this.props.validateEmail}
                error={UI.emailError}
              />
              <Textfield
                label="Password"
                floatingLabel
                onChange={this.onPasswordChange}
                type="password"
                error={UI.passwordError}
              />
              {
                UI.activeTab === 1 ? (
                  <Textfield
                    label="Verify password"
                    floatingLabel
                    onChange={this.onConfirmPasswordChange}
                    type="password"
                    error={UI.confirmPasswordError}
                  />
                ) : null
              }
            </CardText>
            <CardActions>
            {
              UI.activeTab === 1 ? (
                <Button
                  onTouchTap={this.signUp}
                  disabled={!UI.isReadyToSignUp}
                  accent
                >Create a Dispatch Buddy account</Button>
              ) : (
              <Button
                onTouchTap={this.login}
                disabled={!UI.isReadyToLogIn}
                accent
              >Sign into Dispatch Buddy</Button>
              )
            }
            </CardActions>
          </Card>
          <Subheading roomy style={styles.uMarginTop4}>Or you can use one of your Google Accounts:</Subheading>
          <Button
            onTouchTap={this.props.loginWithGoogle}
            raised
            primary
            style={styles.button}
          >
            <i style={styles.buttonIconContainer}>
              <img src={ '/images/ico-googleLogo.svg' } style={styles.buttonIcon} />
            </i>
            Sign in with Google
          </Button>
          <div style={styles.error}>{auth.error}</div>
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    UI: state.UI,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginWithGoogle: () => dispatch(actions.loginWithGoogle()),
    login: () => dispatch(actions.login()),
    signUp: () => dispatch(actions.signUp()),
    updateUI: (update) => dispatch(actions.updateUI(update)),
    validateEmail: () => dispatch(actions.validateEmail()),
  }
}

const styles = {
  button: {
    backgroundColor: '#fff',
    color: palette.blackSecondary,
    ':active': {
      backgroundColor: palette.gray200,
    },
  },
  buttonIconContainer: {
    marginLeft: spacer * -0.5,
    marginRight: spacer * 1.5,
  },
  buttonIcon: {
    position: 'relative',
    top: '-1px',
  },
  companyLoginImage: {
    margin: 30
  },
  uFlexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uFlexCenterV: {
    display: 'flex',
    alignItems: 'center',
  },
  uFlexCenterH: {
    display: 'flex',
    justifyContent: 'center',
  },
  uTextCenter: {
    textAlign: 'center',
  },
  uMarginCenterH: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  uMarginBottom2: {
    marginBottom: spacer * 2,
  },
  uMarginTop2: {
    marginTop: spacer * 2,
  },
  uMarginTop4: {
    marginTop: spacer * 4,
  },
  uPaddingFull: {
    padding: spacer,
  },
  uWidth20: {
    width: spacer * 20,
  },
  hideTabLine: {
    marginTop: -3,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
