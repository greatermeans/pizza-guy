import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Course from '../components/Course'
import { changeActiveCourse } from '../actions/restaurants'

class CoursesContainer extends Component {

  handleClick(event) {
    event.preventDefault()
    let courseName = event.target.dataset.course
    let activeCourse = this.props.activeRestaurant.restaurant.courses.find(course => course.name === courseName)
    this.props.changeActiveCourse(activeCourse)
  }

  render() {
    let { restaurant } = this.props.activeRestaurant
    if (restaurant) {
      return (
        <div>{restaurant.courses.map(course => {
          return <Course {...course} onClick={this.handleClick.bind(this)} />
        })}</div>
      )
    }
    return <h2>Loading...</h2>
  }
}

function mapStateToProps(state) {
  return {
    activeRestaurant: state.restaurants.activeRestaurant
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeActiveCourse}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer)
