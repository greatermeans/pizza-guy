import React, { Component, PropTypes, } from 'react'
import { connect, } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Tabs, Tab } from 'material-ui/Tabs'
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
    actions.changePath(props['data-route'])
  }

  render() {
    return (
      <div style={styles.main}>
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
  main: {
  },
  appBar: {
    backgroundColor: null
  }
}

export default connect(null, null)(AppWrapper)
