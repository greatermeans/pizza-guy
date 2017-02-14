import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import { Layout, Header, Button, Snackbar, } from 'react-mdl'
import { Dialog, } from 'material-ui'
import actions from '../../actions'
import AppNavMenu from './AppNavMenu'
import { fontFamily, palette } from '../../theme/Theme.js'
import Body from '../../ui/typography/Body'

class AppWrapper extends Component {
  constructor() {
    super()

    this.onNavigateTo = this.onNavigateTo.bind(this)
  }

  onNavigateTo(event, value) {
    switch (value) {
      case 'employees':
        this.props.routeToEmployees()
        break
      case 'teams':
        this.props.routeToTeams()
        break
      default:
        this.props.routeTo(value)
        break
    }
  }

  render() {
    const {
      appBar, children, dialog, hideDialog, location, snackbar, routeParams,
    } = this.props

    return (
      <Layout style={styles.mainContainer}>
        {
          routeParams.route !== '' ? (
            <Header
              title={appBar.title}
            />
          ) : null
        }
        <AppNavMenu
          location={location}
          onRequestChangeNavMenu={(value) => {}}
          onNavigateTo={this.onNavigateTo}
        />
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
            <Button onClick={() => {
              hideDialog()
              if (dialog.acceptCallback) {
                dialog.acceptCallback()
              }
            }}>{dialog.acceptCaption}</Button>,
            <Button onClick={() => {
              hideDialog()
              if (dialog.rejectCallback) {
                dialog.rejectCallback()
              }
            }}>{dialog.rejectCaption}</Button>
          ]}
          onRequestClose={() => {}}
          open={dialog.open}
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
    marginLeft: '16%',
    marginTop: '3%',
    marginRight: '1%'
  },
  mainContainer: {
    backgroundColor: palette.gray50,
    fontFamily: fontFamily,
  },
}

const mapStateToProps = (state) => {
  return {
    appBar: state.appBar,
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
