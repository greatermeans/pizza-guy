import React, { Component } from 'react'
import { Card, CardText, CardTitle, } from 'material-ui'

export default class CourseCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: true
    }
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded})
  }

  render() {
    let { courseDetails, courseId, menuItems} = this.props

    return (
      <Card
        initiallyExpanded
        expanded={this.state.expanded}
        onExpandChange={this.handleExpandChange}
        key={courseId}
      >
        <CardTitle
          title={courseDetails.name}
          actAsExpander
          showExpandableButton
          className={'menuSection-header'}
        />
        <CardText expandable>
          <div className={'menuItem-container'}>
            <div className={'menuItem-group'}>
            {
              Object.keys(menuItems).map(itemId => {
                return (
                  <div className={'menuItem'}>
                    {menuItems[itemId].name}
                  </div>
                )
              })
            }
            </div>
          </div>
        </CardText>
      </Card>
    )
  }
}
