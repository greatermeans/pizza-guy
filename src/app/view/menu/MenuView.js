import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import CourseList from './CourseList'
import MenuItemList from './MenuItemList'
import { Paper } from 'material-ui'

class MenuView extends Component {

  handleItemClick = (tile) => {
    let { name, description, item_types: itemTypes } = tile
    let { types, showDialog, } = this.props
    let filteredTypes = itemTypes.map(itemType => types.find(type => type.id === itemType.type_id))
    showDialog({
      title: name,
      acceptCaption: 'Add To Cart',
      rejectCaption: 'Cancel',
      open: true,
      content: description,
      price: itemTypes[0].price
    })
  }

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
      <Paper style={styles.menu} zDepth={3} rounded >
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
          handleClick={this.handleItemClick.bind(this)}
        />
      </Paper>
    )
  }
}

const styles = {
  courseList: {
    flex: 3
  },
  itemList: {
    flex: 5,
  },
  menu: {
    display: 'flex',
    width: 1000,
    height: 500,
    margin: 30,
    flex: 6,
    textAlign: 'left'
  },
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
