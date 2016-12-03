import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import CourseCard from './CourseCard'
import _ from 'lodash'

class MenuView extends Component {

  handleItemClick = (itemId) => {
    let { types, showDialog, menuItems, } = this.props
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

  render() {
    let { courses, menuItems, } = this.props

    return (
      <div className={ 'menuViewContainer' }>
      {
        Object.keys(courses).map(courseId => (
          <CourseCard
            courseDetails={courses[courseId]}
            courseId={courseId}
            key={courseId}
            menuItems={_.omitBy(menuItems, item => (
              item.course_id !== parseInt(courseId, 10)
            ))}
            handleItemClick={this.handleItemClick}
          />
        ))
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    menuItems: state.menuItems,
    types: state.types
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showDialog: (dialog) => dispatch(actions.showDialog(dialog)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuView)
