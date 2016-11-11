import React, { Component, PropTypes, } from 'react'
import { connect, } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Tabs, Tab, Paper, RaisedButton } from 'material-ui'
import store from '../store'
import actions from '../actions'

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
        <Paper style={styles.paper} zDepth={1} rounded={false}>
          <img style={styles.logo} src={'/images/pizzaguy-logo.png'}/>
          <RaisedButton label="Sign Up" primary={true} style={styles.signup} />
        </Paper>
        {React.cloneElement(this.props.children, {
          onChangeMuiTheme: this.handleChangeMuiTheme,
        })}
      </div>
    )
  }
}

const styles = {
  logo: {
    width: 75,
    height: 'auto',
    float: 'left',
    margin: 5,
    marginLeft: 20
  },
  main: {
  },
  paper: {
    height: 80,
    width: '100%',
    textAlign: 'center',
  },
  signup: {
    margin: 20,
    float: 'right',
  },
  white: {
    width: '80%'
  }
}

export default connect(null, null)(AppWrapper)
