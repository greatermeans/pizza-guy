import React, { Component, PropTypes } from 'react'
import { List, ListItem, MakeSelectable} from 'material-ui'
import MobileTearSheet from '../../global_ui/MobileTearSheet'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import actions from '../../actions'

let SelectableList = MakeSelectable(List)

const wrapState = (ComposedComponent) => {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    }

    componentWillMount() {
      this.setState({
        selectedValue: this.props.defaultValue,
      })
    }

    handleRequestChange = (event, value) => {
      this.setState({
        selectedValue: value,
      })
      this.props.onChangeList(event, value)
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedValue}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      )
    }
  }
}

SelectableList = wrapState(SelectableList)

export default class CourseList extends Component {

  render() {
    let { courses, onChangeList, defaultValue } = this.props

    return (
      <MobileTearSheet>
        <SelectableList defaultValue={defaultValue} style={styles.list} onChangeList={onChangeList}>
        {
          courses.map(datum => {
            let { id, name, } = datum
            return (
              <ListItem
                key={id}
                value={id}
                primaryText={name}
                leftIcon={<ContentInbox key={id} />}
                style={styles.listItem}
              />
            )
          })
        }
        </SelectableList>
      </MobileTearSheet>
    )
  }
}

const styles = {
  list: {
  },
  listItem: {
    fontSize: 20,
    lineHeight: 1,
  },
}