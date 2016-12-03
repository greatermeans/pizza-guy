import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import { Divider, FlatButton, RaisedButton } from 'material-ui'
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import CartHeader from './CartHeader'

class CartView extends Component {

  render() {
    let { cart, clearCart, deliverable, menuItems, } = this.props
    let total = 0
    return (
      <div className={'cartWrapper'}>
        <CartHeader deliverable={deliverable}/>
        <Divider/>
        <div style={{textAlign: 'left', margin: 15, fontWeight: 700}}>Your Order</div>
        <Divider/>
        <div className={ 'orderItemContainer' }>
          <div className={ 'orderItem' }>
          { !cart.length ? <div className={ 'cartEmpty' }>Your Cart is Empty!</div> :
            menuItems[60] && cart.map(item => {
              let { quantity, type, itemId } = item
              let { item_types, name } = menuItems[itemId]
              let { price } = item_types.find(itemType => {
                return itemType.item_id === parseInt(itemId, 10) && itemType.type_id === parseInt(type, 10)
              })
              total += price * quantity
              return (
                <div className={ 'orderItemDetails' } key={itemId + ':' + type}>
                  <ContentRemoveCircle style={{margin: null}} className={ 'orderItemRemove' }/>
                  <span className={ 'orderItemQuantity' }>{quantity}</span>
                  <span className={ 'orderItemName' }>{name}<EditorModeEdit style={{height: 18, width: 18}}/></span>
                  <span className={ 'orderItemPrice' }>{quantity * price}</span>
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
            <div className={ 'totalLineAmount' }>{total}</div>
          </div>
          <div className={ 'totalsLines' }>
            <div className={ 'totalLineName' }>Sales Tax:</div>
            <div className={ 'totalLineAmount' }>{total * 0.05}</div>
          </div>
          <div className={ 'totalsLines' }>
            <div className={ 'totalLineName' }>Total:</div>
            <div className={ 'totalLineAmount' }>{total * 1.05}</div>
          </div>
          <div style={{textAlign: '-webkit-auto'}}>
            <FlatButton style={{color: 'blue'}} label={'Clear Cart'} hoverColor={'white'} onClick={() => {clearCart()}} />
          </div>
          <Divider style={{marginTop: 15}} />
          <RaisedButton style={{marginTop: 15, marginBottom: 15}} primary label={'Proceed to Checkout: ' + (total * 1.05)} onClick={() => {clearCart()}} />
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
    types: state.types
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    showDialog: (dialog) => dispatch(actions.showDialog(dialog)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView)
