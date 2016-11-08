import React, { Component, PropTypes, } from 'react'
import { connect, } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Tabs, Tab, Paper } from 'material-ui'
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
        <img style={styles.car} src={'/images/front-side.png'}/>
        </Paper>
        <Tabs>
          <Tab
            label="Home"
            data-route="/"
            onActive={this.handleActiveTab.bind(this)}
          />
          <Tab
            label="Order Online"
            data-route="/order"
            onActive={this.handleActiveTab.bind(this)}
          />
          <Tab
            label="Menu"
            data-route="/menu"
            onActive={this.handleActiveTab.bind(this)}
          />
          <Tab
            label="About Us"
            data-route="/about"
            onActive={this.handleActiveTab.bind(this)}
          />
        </Tabs>
        {React.cloneElement(this.props.children, {
          onChangeMuiTheme: this.handleChangeMuiTheme,
        })}
      </div>
    )
  }
}

const styles = {
  car: {
    width: 150,
    height: 'auto',
  },
  main: {
  },
  paper: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
  }
}

export default connect(null, null)(AppWrapper)
