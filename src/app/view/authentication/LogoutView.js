import { Component, } from 'react'
import { connect, } from 'react-redux'
import actions from '../../actions'

class LogoutView extends Component {
  componentWillMount() {
    this.props.logout()
  }

  render() {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutView)
