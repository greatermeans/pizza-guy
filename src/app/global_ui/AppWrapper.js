import React, { Component, PropTypes, } from 'react'
import { connect, } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  RadioButton, RadioButtonGroup, RaisedButton,
  Snackbar, Toolbar, ToolbarGroup,
} from 'material-ui'
import actions from '../actions'
import EnterAddress from './EnterAddress'
import MapsLocalPizza from 'material-ui/svg-icons/maps/local-pizza'
import Dialog from './Dialog'

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
    const { children, checkDeliveryZone, dialog, deliverable, snackbar, addItem, hideDialog, } = this.props
    let buttonLabel = ''
    if (deliverable) {
      buttonLabel = 'Delivery is available'
    } else if (deliverable === false) {
      buttonLabel = 'Take-out is available'
    }

    return (
      <div>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup firstChild>
            <img style={styles.logo} src={'/images/pizzaguy-logo.png'}/>
            <EnterAddress checkDeliveryZone={checkDeliveryZone} deliverable={deliverable}/>
            { buttonLabel ?
            <RadioButtonGroup name={'delivery'} valueSelected={deliverable ? 'pizza' : ''}>
              <RadioButton
                value="pizza"
                label={buttonLabel}
                checkedIcon={<MapsLocalPizza color={'red'}/>}
                uncheckedIcon={<MapsLocalPizza />}
                style={styles.radioButton}
              />
            </RadioButtonGroup> : null
          }
          </ToolbarGroup>
          <ToolbarGroup style={styles.secondGroup}>
            <RaisedButton label={'Sign In'} primary/>
          </ToolbarGroup>
        </Toolbar>
        {React.cloneElement(children, {
          onChangeMuiTheme: this.handleChangeMuiTheme,
          auth: this.props.route.auth
        })}
        <Snackbar
          bodyStyle={styles.snackbarBody}
          open={snackbar.open || false}
          message={snackbar.message || ' '}
          action={snackbar.action || ' '}
          onActionTouchTap={() => {
            this.props.hideSnackbar()
            if (snackbar.onActionTouchTap) {
              snackbar.onActionTouchTap()
            }
          }}
          autoHideDuration={snackbar.autoHideDuration}
          onRequestClose={snackbar.sticky ? (() => {}) : this.props.hideSnackbar}
        />
        <Dialog dialog={dialog} hideDialog={hideDialog} addItem={addItem}/>
      </div>
    )
  }
}

const styles = {
  basket: {
    width: 40,
    height: 40,
  },
  logo: {
    width: 100,
    margin: 5,
    marginLeft: 20
  },
  radioButton: {
    marginLeft: 110,
    marginTop: 15,
    width: '75%',
    minWidth: '75%'
  },
  secondGroup: {
    display: 'block',
    marginTop: 22
  },
  toolbar: {
    height: 100,
    backgroundColor: 'white',
    WebkitBoxShadow: '2px 1px 5px 0px rgba(0,0,0,0.75)'
  },
}

const mapStateToProps = (state) => {
  return {
    deliverable: state.user.deliverable,
    dialog: state.dialog,
    snackbar: state.snackbar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(actions.addItem(item)),
    checkDeliveryZone: (address) => dispatch(actions.checkDeliveryZone(address)),
    hideSnackbar: () => dispatch(actions.hideSnackbar()),
    hideDialog: () => dispatch(actions.hideDialog()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper)
