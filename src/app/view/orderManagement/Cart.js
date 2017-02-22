import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import { Divider, FlatButton, RaisedButton, } from 'material-ui'
import actions from '../../actions'
import AddItemToCartForm from './AddItemToCartForm'
import ChangeAddressForm from './ChangeAddressForm'
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import emptyCart from '../../images/emptyCart.png'
import _ from 'lodash'

class Cart extends Component {
  render() {
    const { cartItems, cartTotal, taxRate, } = this.props.cart
    const { addresses, } = this.props.user
    const defaultAddress = Object.keys(addresses).length &&
      addresses[Object.keys(addresses)[0]]
    console.log(cartTotal)
    return (
      <div style={styles.cartContainer}>
        <div style={styles.cartTitle}>Your Cart</div>
        <Divider style={styles.divider} />
        <div
          style={styles.addressAndTime}
          onClick={() => this.props.showChangeAddressDialog(
            <ChangeAddressForm processAddressComponents={this.props.processAddressComponents}/>
          )}
        >
          <div style={styles.addressAndTimeInnerContainer}>
            <div style={styles.time}>
              {'Delivery, ASAP (50-60 min)'}
            </div>
            <div style={!defaultAddress && styles.addressUnavailable || {}}>
              {
                !defaultAddress ? 'Click To Enter Address' : (
                  'To: ' + defaultAddress.fullAddress
                )
              }
            </div>
          </div>
          <FlatButton
            hoverColor={'white'}
            label={'Change'}
            style={styles.changeButton}
          />
        </div>
        <div style={styles.cartBody}>
          <div style={styles.cartItems}>
          {
            !Object.keys(cartItems).length ?
            <img style={styles.emptyCartImage} src={ emptyCart }/> :
            Object.keys(cartItems).map(cartItemId => {
              let { itemCost, itemId, itemName, itemType, quantity, } = cartItems[cartItemId]
              return (
                <div style={styles.itemContainer} key={itemId + ':' + itemType}>
                  <ContentRemoveCircle
                    style={styles.itemRemove}
                    onClick={() => this.props.showRemoveItemDialog(cartItemId)}
                  />
                  <span style={styles.itemQuantity}>{quantity}</span>
                  <div style={styles.itemNameContainer}>
                    <span
                      style={styles.itemName}
                      onClick={
                        () => this.props.showEditItemInCartDialog(cartItemId, <AddItemToCartForm/>)
                      }
                    >
                      {itemName}<EditorModeEdit style={styles.editItemButton}/>
                    </span>
                    <ul style={styles.itemDescription}>
                      <li>
                        {_.capitalize(itemType)}
                      </li>
                    </ul>
                  </div>
                  <span style={styles.itemPrice}>{itemCost}</span>
                </div>
              )
            })
          }
          </div>
          <Divider style={styles.divider} />
          <div style={styles.totalsLines}>
            <div style={styles.totalLineName}>Items Subtotal:</div>
            <div style={styles.totalLineAmount}>{cartTotal}</div>
          </div>
          <div style={styles.totalsLines}>
            <div style={styles.totalLineName}>Sales Tax:</div>
            <div style={styles.totalLineAmount}>{cartTotal * taxRate}</div>
          </div>
          <div style={styles.totalsLines}>
            <div style={styles.totalLineName}>Total:</div>
            <div style={styles.totalLineAmount}>{cartTotal * (1 + taxRate)}</div>
          </div>
          <FlatButton
            style={styles.clearCartButton}
            label={'Clear Cart'}
            hoverColor={'white'}
            onClick={this.props.showEmptyCartDialog}
          />
        </div>
        <Divider style={styles.divider} />
        <div style={styles.cartFooter}>
          <RaisedButton
            label={'Proceed to Checkout: ' + (cartTotal * (1 + taxRate))}
            onClick={() => {}} //needs to change
            primary
            style={styles.checkoutButton}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  addressAndTime: {
    cursor: 'pointer',
    display: 'flex',
    margin: 10,
  },
  addressAndTimeInnerContainer: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    margin: 10,
  },
  addressUnavailable: {
    color: '#399',
    transition: 'color .2s ease',
  },
  cartBody: {
    overflowY: 'auto',
  },
  cartContainer: {
    display: 'flex',
    flex: 1.5,
    flexDirection: 'column',
    fontSize: 14,
    maxWidth: 350,
  },
  cartFooter: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    flex: '0 0 auto',
    margin: 10,
    WebkitBoxFlex: 0,
    zIndex: 10,
  },
  cartItems: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: 14,
    lineHeight: 1.4,
    marginBottom: 15,
    overflowY: 'auto',
  },
  cartTitle: {
    height: 30,
    margin: 5
  },
  cartTotals: {
    bottom: 0,
    flex: '0 0 auto',
    WebkitBoxFlex: 0,
    width: '100%',
  },
  changeButton: {
    flex: 1,
  },
  checkoutButton: {
    display: 'block',
    flex: 1,
  },
  clearCartButton: {
    color: 'blue',
    textAlign: '-webkit-auto',
  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
  },
  editItemButton: {
    height: 18,
    opacity: 0.5,
    width: 18,
  },
  emptyCartImage: {
    maxWidth: 320,
  },
  itemContainer: {
    display: 'flex',
    width: 'inherit',
  },
  itemDescription: {
    display: 'block',
    listStyleType: 'disc',
    WebkitMarginBefore: '1em',
    WebkitMarginAfter: '1em',
    WebkitMarginStart: 0,
    WebkitMarginEnd: 0,
    WebkitPaddingStart: 40,
    margin: '10px 0 0',
    paddingLeft: 30,
    fontSize: 12,
    lineHeight: 1.45,
    textAlign: 'left',
  },
  itemName: {
    color: '#399',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color .2s ease',
  },
  itemNameContainer: {
    flex: 3,
    padding: '10px 10px',
    textAlign: 'left',
  },
  itemPrice: {
    color: '#777',
    flex: 1,
    padding: '15px 20px 15px 10px',
    textAlign: 'right',
    WebkitBoxFlex: 0,
    whiteSpace: 'nowrap',
  },
  itemQuantity: {
    flex: 1,
    padding: '15px 0 0',
    textAlign: 'center',
  },
  itemRemove: {
    cursor: 'pointer',
    flex: 1,
    height: 20,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 8,
    marginTop: 14,
    opacity: 0.5,
  },
  totalsLines: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 20,
  },
  totalLineAmount: {
    flex: '0 0 100px',
    textAlign: 'right',
    WebkitBoxFlex: 0,
    whiteSpace: 'nowrap',
  },
  totalLineName: {
    flex: 1,
    textAlign: 'left',
  },
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    items: state.items,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processAddressComponents: (addressComponents) => dispatch(actions.processAddressComponents(addressComponents)),
    showChangeAddressDialog: (form) => dispatch(actions.showChangeAddressDialog(form)),
    showEditItemInCartDialog: (cartItemId, form) => dispatch(actions.showEditItemInCartDialog(cartItemId, form)),
    showEmptyCartDialog: () => dispatch(actions.showEmptyCartDialog()),
    showRemoveItemDialog: (cartItemId) => dispatch(actions.showRemoveItemDialog(cartItemId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
