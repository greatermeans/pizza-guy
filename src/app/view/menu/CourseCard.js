import React, { Component } from 'react'
import { Card, CardText, CardTitle, } from 'material-ui'
import MenuItemCard from './MenuItemCard'

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
    const { courseDetails, courseId, handleItemClick, menuItems, } = this.props

    return (
      <Card
        initiallyExpanded
        expanded={this.state.expanded}
        onExpandChange={this.handleExpandChange}
        key={courseId}
        containerStyle={{marginBottom: 30}}
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
                  <div key={itemId} className={'menuItem'} onClick={() => { handleItemClick(itemId) }}>
                    <MenuItemCard
                      itemDetails={menuItems[itemId]}
                      itemId={itemId}
                    />
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
