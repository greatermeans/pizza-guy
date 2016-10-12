import React, { Component, PropTypes, } from 'react'
import { connect, } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const styles = {
  appBar: {
    position: 'fixed',
  },
}

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

  render() {
    return (
      <div>
        <AppBar
          title={'Hello'}
          showMenuIconButton={false}
          style={styles.appBar}
        />
        <div>
          {React.cloneElement(this.props.children, {
            onChangeMuiTheme: this.handleChangeMuiTheme,
          })}
        </div>
      </div>
    )
  }
}



export default connect(null, null)(AppWrapper)
