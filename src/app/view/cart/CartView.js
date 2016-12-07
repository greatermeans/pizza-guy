import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import { Divider, FlatButton, RaisedButton } from 'material-ui'
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import CartHeader from './CartHeader'
import _ from 'lodash'

class CartView extends Component {

  handleEditItem = (item) => {
    let { types, showDialog, menuItems, updateItem } = this.props
    let { name, description, item_types: itemTypes } = menuItems[item.itemId]
    let filteredTypes = {}
    itemTypes.map(itemType => {
      filteredTypes[itemType.type_id] = types[itemType.type_id]
    })
    let selected = item.type
    showDialog({
      title: name,
      acceptCaption: 'Update Item',
      acceptCallback: updateItem,
      rejectCaption: 'Cancel Changes',
      open: true,
      content: description,
      itemTypes,
      filteredTypes,
      selected,
      ...item
    })
  }

  render() {
    let { cart, clearCart, deliverable, menuItems, removeItem, routeTo, routing, types } = this.props
    let cartTotal = 0
    let taxRate = 0.05
    let route = routing.locationBeforeTransitions.pathname

    return (
      <div className={'cartWrapper'}>
        <CartHeader deliverable={deliverable}/>
        <Divider/>
        <div style={{textAlign: 'left', margin: 15, fontWeight: 700}}>Your Order</div>
        <Divider/>
        <div className={ 'orderItemContainer' }>
          <div className={ 'orderItem' }>
          {
            !cart.length ? <div className={ 'cartEmpty' }>Your Cart is Empty!</div> :
            cart.map(item => {
              let { quantity, type, itemId, } = item
              let { item_types, name } = menuItems[itemId]
              let { price } = _.find(item_types, {
                'item_id': parseInt(itemId, 10), 'type_id': parseInt(type, 10)
              })
              let itemTotal = quantity * price
              cartTotal += itemTotal
              return (
                <div className={ 'orderItemDetails' } key={itemId + ':' + type}>
                  <ContentRemoveCircle
                    style={{margin: null, height: 20}}
                    className={ 'orderItemRemove' }
                    onClick={() => {removeItem(itemId, type)}}
                  />
                  <span className={ 'orderItemQuantity' }>{quantity}</span>
                  <div className={ 'orderItemNameContainer' }>
                    <span className={ 'orderItemName' } onClick={() => {this.handleEditItem(item)}}>
                      {name}<EditorModeEdit style={{height: 18, width: 18}}/>
                    </span>
                    <ul className={ 'orderItemDescription' }>
                      <li>
                        {types[type] && types[type].name}
                      </li>
                    </ul>
                  </div>
                  <span className={ 'orderItemPrice' }>{itemTotal}</span>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className={ 'cartFooter' }>
          <br />
          <div className={ 'totalsLines' }>
            <div className={ 'totalLineName' }>Items Subtotal:</div>
            <div className={ 'totalLineAmount' }>{cartTotal}</div>
          </div>
          <div className={ 'totalsLines' }>
            <div className={ 'totalLineName' }>Sales Tax:</div>
            <div className={ 'totalLineAmount' }>{cartTotal * taxRate}</div>
          </div>
          <div className={ 'totalsLines' }>
            <div className={ 'totalLineName' }>Total:</div>
            <div className={ 'totalLineAmount' }>{cartTotal * (1 + taxRate)}</div>
          </div>
          { route === '/checkout' ?
            (<div style={{marginTop: 20}}>
              <div className={ 'checkoutChangeOrder' } onClick={() => {routeTo('')}}>
                <KeyboardArrowLeft style={{color: 'white', marginBottom: -5}} />Modify Your Order
              </div>
              <div className={ 'checkoutTotal' }>
                <div className={ 'totalLineName' }><h3>Total:</h3></div>
                <div className= { 'totalLineAmount' }>
                  <h3>{cartTotal * (1 + taxRate)}</h3>
                </div>
              </div>
            </div>
            ) :
            (<div>
              <div style={{textAlign: '-webkit-auto'}}>
                <FlatButton
                  style={{color: 'blue'}}
                  label={'Clear Cart'}
                  hoverColor={'white'}
                  onClick={() => {clearCart()}}
                  />
              </div>
              <Divider style={{marginTop: 15}} />
              <RaisedButton
                style={{marginTop: 15, marginBottom: 15}}
                primary
                label={'Proceed to Checkout: ' + (cartTotal * (1 + taxRate))}
                onClick={() => {routeTo('checkout')}} //needs to change
              />
            </div>
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    deliverable: state.user.deliverable,
    menuItems: state.menuItems,
    routing: state.routing,
    types: state.types
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeItem: (itemId, typeId) => dispatch(actions.removeItem(itemId, typeId)),
    routeTo: (route) => dispatch(actions.routeTo(route)),
    showDialog: (dialog) => dispatch(actions.showDialog(dialog)),
    updateItem: (item) => dispatch(actions.updateItem(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)
