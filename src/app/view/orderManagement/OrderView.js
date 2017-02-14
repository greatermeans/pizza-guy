import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import actions from '../../actions'
import { Button, } from 'react-mdl'

class OrderView extends Component {

  render() {
    return (
      <div>
        <Button onClick={this.props.sendMenuToDB}>Generate</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMenuToDB: () => dispatch(actions.sendMenuToDB())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderView)
