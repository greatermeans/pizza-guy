import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import { Layout, Header, Button, Snackbar, } from 'react-mdl'
import { Avatar, Dialog, } from 'material-ui'
import actions from '../../actions'
import { fontFamily, } from '../../theme/Theme.js'
import Body from '../../ui/typography/Body'

class AppWrapper extends Component {
  render() {
    const {
      auth, children, dialog, hideDialog, snackbar, routeParams,
    } = this.props

    return (
      <Layout style={styles.mainContainer}>
      {
        routeParams.route !== '' ? (
          <Header
            title={'Convenience'}
          >
            {
              auth.uid ? (
                <div style={styles.userInfo}>
                  <div style={styles.userName}>{ auth.username }</div>
                  <Avatar src={auth.photoURL}/>
                </div>
              ) : null
            }
          </Header>
        ) : null
      }
        <Snackbar
          active={snackbar.active || false}
          action={snackbar.action || ' '}
          onActionClick={() => {}}
          onTimeout={() => {}}
          timeout={snackbar.timeout}
        >
          {snackbar.message || ' '}
        </Snackbar>
        <Dialog
          actions={[
            <Button
              onClick={() => {
                hideDialog()
                if (dialog.acceptCallback) {
                  dialog.acceptCallback()
                }
              }}
            >
              {dialog.acceptCaption}
            </Button>,
            <Button
              onClick={() => {
                hideDialog()
                if (dialog.rejectCallback) {
                  dialog.rejectCallback()
                }
              }}
            >
              {dialog.rejectCaption}
            </Button>
          ]}
          bodyStyle={styles.dialogContent}
          onRequestClose={() => {}}
          open={dialog.open}
          subtitle={dialog.subtitle}
          title={dialog.title}
        >
          <Body noLeadMargin>
            {dialog.content}
          </Body>
        </Dialog>
        <div style={styles.children}>
          {children}
        </div>
      </Layout>
    )
  }
}

const styles = {
  children: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  dialogContent: {
    overflow: 'scroll',
  },
  mainContainer: {
    fontFamily: fontFamily,
    display: 'flex',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    lineHeight: '40px',
  },
  userName: {
    marginRight: 20,
  },
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    dialog: state.dialog,
    routeParams: state.routeParams,
    snackbar: state.snackbar,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideDialog: () => dispatch(actions.hideDialog()),
    hideSnackbar: () => dispatch(actions.hideSnackbar()),
    routeTo: (route, params) => dispatch(actions.routeTo(route, params)),
    routeToEmployees: () => dispatch(actions.routeToEmployees()),
    routeToTeams: () => dispatch(actions.routeToTeams()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper)
