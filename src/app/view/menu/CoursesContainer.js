import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectCourse } from '../../actions/courses'
import Course from './Course'
import actions from '../../actions'

class CoursesContainer extends Component {

  render() {
    const { courses } = this.props
    var courseItems = this.props.courses.map(course => <Course {...course} />)
    return (
      <div id="container">
        {courses}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { courses: state.courses }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer)
