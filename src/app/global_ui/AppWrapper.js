import React, { Component, PropTypes, } from 'react'
import { connect, } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Paper, RaisedButton } from 'material-ui'
import store from '../store'
import actions from '../actions'
import ShoppingBasket from 'material-ui/svg-icons/action/shopping-basket'

class AppWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    muiTheme: PropTypes.object,
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    }
  }

  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme(),
    })
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme
    this.setState({
      muiTheme: newMuiTheme,
    })
  }

  handleChangeMuiTheme = (muiTheme) => {
    this.setState({
      muiTheme: muiTheme,
    })
  }

  handleActiveTab({props}) {
    store.dispatch(actions.changePath(props['data-route']))
  }

  render() {
    return (
      <div style={styles.main}>
        <Paper style={styles.header} zDepth={1} rounded={false}>
          <img style={styles.logo} src={'/images/pizzaguy-logo.png'}/>
          <ShoppingBasket style={styles.basket}/>
          <RaisedButton label="Sign Up" primary style={styles.signup} />
          <RaisedButton label="Log In" primary style={styles.login}/>
        </Paper>
        {React.cloneElement(this.props.children, {
          onChangeMuiTheme: this.handleChangeMuiTheme,
        })}
        <Paper style={styles.footer} rounded={false} zDepth={1}>
          <div style={styles.footText}>
            hello
          </div>
        </Paper>
      </div>
    )
  }
}

const styles = {
  basket: {
    marginTop: 16,
    marginRight: 20,
    float: 'right',
    width: 45,
    height: 'auto',
    cursor: 'pointer'
  },
  footer: {
    backgroundColor: 'black',
    height: 40,
    width: '100%',
    textAlign: 'center',
    opacity: 0.95,
    position: 'absolute',
    bottom: 0,
    color: 'white'
  },
  footText: {
    textAlign: 'center'
  },
  header: {
    height: 80,
    width: '100%',
    textAlign: 'center',
  },
  logo: {
    width: 75,
    height: 'auto',
    float: 'left',
    margin: 5,
    marginLeft: 20
  },
  main: {
  },
  signup: {
    margin: 20,
    float: 'right',
  },
  login: {
    marginTop: 20,
    float: 'right'
  },
  white: {
    width: '80%'
  }
}

export default connect(null, null)(AppWrapper)
