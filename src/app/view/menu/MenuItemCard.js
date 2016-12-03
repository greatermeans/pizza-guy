import React, { Component } from 'react'

export default class MenuItemCard extends Component {
  render() {
    const { itemDetails, } = this.props

    return (
        <div className={'menuItem-inner'}>
          <div className={'menuItem-info'}>
            {itemDetails.name}
          </div>
          <div className={'menuItem-details'}>
            {itemDetails.description}
          </div>
        </div>
    )
  }
}
