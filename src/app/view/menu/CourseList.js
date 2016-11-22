import React, { Component, PropTypes } from 'react'
import { List, ListItem, makeSelectable} from 'material-ui'
import MobileTearSheet from './MobileTearSheet'
import ContentInbox from 'material-ui/svg-icons/content/inbox'

let SelectableList = makeSelectable(List)

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
          Object.keys(courses).map(courseId => (
            <ListItem
              key={courseId}
              value={courseId}
              primaryText={courses[courseId].name}
              leftIcon={<ContentInbox key={courseId} />}
              style={styles.listItem}
              innerDivStyle={styles.innerDiv}
            />
          ))
        }
        </SelectableList>
      </MobileTearSheet>
    )
  }
}

const styles = {
  innerDiv: {
    paddingLeft: 50,
    paddingTop: 14,
    paddingBottom: 14
  },
  list: {
  },
  listItem: {
    fontSize: 16,
    lineHeight: 1.25,
  },
}
