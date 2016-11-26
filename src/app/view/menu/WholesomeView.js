import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import CourseCard from './CourseCard'
import _ from 'lodash'

class MenuView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: true
    }
  }

  handleItemClick = (itemId) => {
    let { types, showDialog, menuItems} = this.props
    let { name, description, item_types: itemTypes } = menuItems[itemId]
    let filteredTypes = {}
    itemTypes.map(itemType => {
      filteredTypes[itemType.type_id] = types[itemType.type_id]
    })
    let selected = filteredTypes && Object.keys(filteredTypes)[0]
    showDialog({
      title: name,
      acceptCaption: 'Add To Cart',
      rejectCaption: 'Cancel',
      open: true,
      content: description,
      itemTypes,
      itemId,
      filteredTypes,
      selected
    })
  }

  handleChangeList = (event, value) => {
    this.props.selectCourse(value)
  }

  handleItemSelection = (event, value) => {
    this.props.selectItem(value)
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded})
  }

  render() {
    let { courses, menuItems, } = this.props

    return (
      <div style={{minWidth: 1100, overflow: 'auto', margin: 15, paddingLeft: 30, paddingRight: 60}}>
      {
        Object.keys(courses).map(courseId => (
          <CourseCard
            courseDetails={courses[courseId]}
            courseId={courseId}
            key={courseId}
            menuItems={_.omitBy(menuItems, item => (
              item.course_id !== parseInt(courseId, 10)
            ))}
          />
        ))
      }
      </div>
    )
  }
}

const styles = {
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    menuItems: state.menuItems,
    selectedCourse: state.selectedCourse,
    types: state.types
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCourse: (id) => dispatch(actions.selectCourse(id)),
    selectItem: (id) => dispatch(actions.selectItem(id)),
    showDialog: (dialog) => dispatch(actions.showDialog(dialog)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuView)
