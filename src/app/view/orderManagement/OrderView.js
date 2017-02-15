import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import actions from '../../actions'
import { Button, } from 'react-mdl'
import { CircularProgress } from 'material-ui'

class OrderView extends Component {

  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

const styles = {}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderView)
