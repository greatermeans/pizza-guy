import React, { Component, PropTypes, } from 'react'
import { connect, } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { IconButton, Paper, RaisedButton, Dialog, Snackbar, FlatButton, TextField } from 'material-ui'
import store from '../store'
import actions from '../actions'
import ShoppingBasket from 'material-ui/svg-icons/action/shopping-basket'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import EnterAddress from './EnterAddress'

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
    return (
      <div style={styles.main}>
        <Paper style={styles.header} zDepth={1} rounded={false}>
          <img style={styles.logo} src={'/images/pizzaguy-logo.png'}/>
          <EnterAddress checkDeliveryZone={checkDeliveryZone} deliverable={deliverable}/>
          <ShoppingBasket style={styles.basket}/>
          <RaisedButton label="Sign Up" primary style={styles.signup} />
          <RaisedButton label="Log In" primary style={styles.login}/>
        </Paper>
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
    marginTop: 16,
    marginRight: 20,
    float: 'right',
    width: 45,
    height: 'auto',
    cursor: 'pointer'
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
  footer: {
    backgroundColor: 'black',
    height: 40,
    width: '100%',
    textAlign: 'center',
    opacity: 0.95,
    position: 'absolute',
    bottom: 0,
    color: 'white'
  },
  footText: {
    textAlign: 'center'
  },
  header: {
    height: 80,
    width: '100%',
    textAlign: 'center',
  },
  itemDescription: {
    textAlign: '-webkit-auto'
  },
  itemPrice: {
    textAlign: '-webkit-auto',
    fontWeight: 600,
    marginBottom: 20,
  },
  login: {
    marginTop: 20,
    float: 'right'
  },
  logo: {
    width: 75,
    height: 'auto',
    float: 'left',
    margin: 5,
    marginLeft: 20
  },
  main: {
  },
  signup: {
    margin: 20,
    float: 'right',
  },
  title: {
    textAlign: '-webkit-auto',
    paddingBottom: 10
  },
  white: {
    width: '80%'
  }
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
