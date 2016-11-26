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
          subtitle={courseDetails.description}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          {
            Object.keys(menuItems).map(itemId => {
              debugger
              return (
                <div>{menuItems[itemId].name}</div>
              )
            })
          }
        </CardText>
      </Card>
    )
  }
}

const styles = {
}
