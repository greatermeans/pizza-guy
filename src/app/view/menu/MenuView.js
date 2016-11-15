import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import CourseList from './CourseList'
import MenuItemList from './MenuItemList'

class MenuView extends Component {
  handleChangeList = (event, value) => {
    this.props.selectCourse(value)
  }

  handleItemSelection = (event, value) => {
    this.props.selectItem(value)
  }

  render() {
    let { courses, menuItems, selectedCourse, } = this.props
    let menuItemsForSelectedCourse = menuItems.filter(item => item.course_id === selectedCourse)

    return (
      <div id="container">
        <CourseList
          courses={courses}
          onChangeList={this.handleChangeList}
          defaultValue={selectedCourse}
          style={styles.courseList}
        />
        <MenuItemList
          menuItems={menuItemsForSelectedCourse}
          onChangeList={this.handleItemSelection}
          defaultValue={menuItemsForSelectedCourse[0] && menuItemsForSelectedCourse[0].id || 1}
          style={styles.itemList}
        />
      </div>
    )
  }
}

const styles = {
  courseList: {
    float: 'left'
  },
  itemList: {
    float: 'right'
  },
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    menuItems: state.menuItems,
    selectedCourse: state.selectedCourse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCourse: (id) => dispatch(actions.selectCourse(id)),
    selectItem: (id) => dispatch(actions.selectItem(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuView)
