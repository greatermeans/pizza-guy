import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class MenuView extends Component {

  render() {

    return (
      <div>
        hello
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(null, mapDispatchToProps)(MenuView)
