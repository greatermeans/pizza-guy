import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import { TextField } from 'material-ui'

class NewAddress extends Component {

  render() {
    return (
      <div className={ 'newAddress' }>
        hello
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAddress)
