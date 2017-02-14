import { connect, } from 'react-redux'
import React, { Component, } from 'react'
import { palette, } from '../../theme/Theme'

import { Divider, List, ListItem, makeSelectable, } from 'material-ui'
import ActionBuild from 'material-ui/svg-icons/action/build'
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app'
import ContentFlag from 'material-ui/svg-icons/content/flag'
import SocialPeople from 'material-ui/svg-icons/social/people'

const SelectableList = makeSelectable(List)

class AppNavMenu extends Component {
  render() {
    return this.props.auth.uid ? (
      <SelectableList
        value={this.props.location.pathname}
        onChange={this.props.onNavigateTo}
        style={styles.navBar}
      >
        <ListItem
          style={styles.navigationDividerItem}
          primaryText="Technicians"
          leftIcon={<ActionBuild/>}
          value="employees"
        />
        <ListItem
          style={styles.navigationItem}
          primaryText="Teams"
          leftIcon={<SocialPeople/>}
          value="teams"
        />
        <Divider style={styles.dividerPadding}/>
        <ListItem
          style={styles.navigationDividerItem}
          primaryText="Team Goals"
          leftIcon={<ContentFlag/>}
          value="teamGoals"
        />
        <Divider style={styles.dividerPadding}/>
        <ListItem
          style={styles.navigationDividerItem}
          primaryText="Sign Out"
          leftIcon={<ActionExitToApp/>}
          value="logout"
        />
      </SelectableList>
    ) : null
  }
}

const styles = {
  dividerPadding: {
    marginLeft: 16,
  },
  navBar: {
    padding: '150px 10px',
    height: '100%',
    position: 'fixed',
  },
  navigationDividerItem: {
    color: palette.textColor,
    paddingBottom: 12,
    paddingTop: 12,
  },
  navigationItem: {
    color: palette.textColor,
    paddingBottom: 12,
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(AppNavMenu)
