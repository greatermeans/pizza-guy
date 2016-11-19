import React, { Component, PropTypes, } from 'react'
import { connect, } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  IconButton, RadioButton, RadioButtonGroup, RaisedButton, Dialog,
  Snackbar, FlatButton, TextField, Toolbar, ToolbarGroup,
} from 'material-ui'
import store from '../store'
import actions from '../actions'
import ShoppingBasket from 'material-ui/svg-icons/action/shopping-basket'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import EnterAddress from './EnterAddress'
import MapsLocalPizza from 'material-ui/svg-icons/maps/local-pizza'

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
      counter: 1,
      instructions: '',
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
    const { children, checkDeliveryZone, dialog, deliverable, snackbar, addItem, hideDialog, } = this.props
    const { counter } = this.state
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
            <RadioButtonGroup valueSelected={deliverable ? 'pizza' : ''}>
              <RadioButton
                value="pizza"
                label={buttonLabel}
                checkedIcon={<MapsLocalPizza color={'red'}/>}
                uncheckedIcon={<MapsLocalPizza />}
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </ToolbarGroup>
          <ToolbarGroup style={styles.secondGroup}>
            <RaisedButton label={'Sign Up'} primary/>
            <RaisedButton label={'Log In'} primary/>
          </ToolbarGroup>
          <ToolbarGroup style={styles.thirdGroup}>
            <IconButton iconStyle={styles.basket}><ShoppingBasket/></IconButton>
          </ToolbarGroup>
        </Toolbar>
        {React.cloneElement(children, {
          onChangeMuiTheme: this.handleChangeMuiTheme,
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
        <Dialog
          title={dialog.title}
          titleStyle={styles.title}
          actions={[
            <FlatButton
              label={dialog.rejectCaption || ' '}
              primary
              onTouchTap={() => {
                this.props.hideDialog()
                if (dialog.rejectCallback) {
                  dialog.rejectCallback()
                }
              }}
            />,
            <FlatButton
              label={dialog.acceptCaption || ' '}
              primary
              keyboardFocused
              onTouchTap={() => {
                hideDialog()
                addItem(dialog.item)
                if (dialog.acceptCallback) {
                  dialog.acceptCallback()
                }
              }}
            />,
          ]}
          open={dialog.open || false}
          onRequestClose={this.props.hideDialog}
        >
        <div style={styles.itemPrice}>
          { (dialog.price * counter) + 'kr' }
        </div>
        <div style={styles.itemDescription}>
          { dialog.content + '.'}
        </div>
        <div style={styles.counterContainer}>
          <IconButton onTouchTap={()=> {
            let newCounter = counter === 1 ? counter : counter - 1
            this.setState({counter: newCounter})
          }}>
            <ContentRemove />
          </IconButton>
          <div style={styles.counter}>
            {counter}
          </div>
          <IconButton onTouchTap={()=> {
            let newCounter = counter > 20 ? counter : counter + 1
            this.setState({counter: newCounter})
          }}>
            <ContentAdd />
          </IconButton>
        </div>
        <TextField
          hintText={
            'No pepporoni? Dressing on the side?\
             Let us know here. Note: any price alterations due to special requests \
             will be charged after your order is processed.'
           }
          floatingLabelText={'Add Special Instructions Here!'}
          rows={4}
          rowsMax={5}
          fullWidth
          onChange={(event, value)=> {
            this.setState({instructions: value})
          }}
        />
        </Dialog>
      </div>
    )
  }
}

const styles = {
  basket: {
    width: 40,
    height: 40,
  },
  counter: {
    boxShadow: '0 0 2px rgba(0,0,0,.3)',
    borderRadius: 8,
    width: 44,
    alignSelf: 'center'
  },
  counterContainer: {
    display: 'flex'
  },
  itemDescription: {
    textAlign: '-webkit-auto'
  },
  itemPrice: {
    textAlign: '-webkit-auto',
    fontWeight: 600,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    margin: 5,
    marginLeft: 20
  },
  radioButton: {
    marginLeft: 100,
    marginTop: 35,
    width: '75%',
    minWidth: '75%'
  },
  secondGroup: {
    display: 'block',
    marginRight: -400,
    marginTop: 22
  },
  thirdGroup: {
    marginTop: 15,
  },
  title: {
    textAlign: '-webkit-auto',
    paddingBottom: 10
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
