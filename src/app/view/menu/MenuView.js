import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import CourseList from './CourseList'
import MenuItemList from './MenuItemList'
import { Paper } from 'material-ui'

class MenuView extends Component {

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

  render() {
    let { courses, menuItems, selectedCourse, } = this.props

    return (
      <Paper style={styles.paperContainer} zDepth={3} rounded >
        <CourseList
          courses={courses}
          onChangeList={this.handleChangeList}
          defaultValue={selectedCourse}
        />
        <MenuItemList
          selectedMenuItems={courses[selectedCourse] && courses[selectedCourse].item_ids || []}
          menuItems={menuItems}
          onChangeList={this.handleItemSelection}
          handleClick={this.handleItemClick.bind(this)}
          selectedCourseDetails={courses && courses[selectedCourse]}
        />
      </Paper>
    )
  }
}

const styles = {
  paperContainer: {
    display: 'flex',
    height: 640,
    margin: 30,
    flex: 7,
    textAlign: 'left',
    width: 1111
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
