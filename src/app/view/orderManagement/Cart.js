import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import { Divider, FlatButton, RaisedButton, } from 'material-ui'
import actions from '../../actions'
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import emptyCart from '../../images/emptyCart.png'
import _ from 'lodash'

class Cart extends Component {
  render() {
    const { cartItems, cartTotal, taxRate, } = this.props.cart
    return (
      <div style={styles.cartContainer}>
        <div style={styles.cartTitle}>Your Cart</div>
        <Divider style={styles.divider} />
        <div style={styles.addressAndTime}>
          <div style={styles.addressAndTimeInnerContainer}>
            <div style={styles.time}>
              {'Delivery, ASAP (50-60 min)'}
            </div>
            <div style={styles.address}>
              {'To: Home Address'}
            </div>
          </div>
          <FlatButton label={'Change'} style={styles.changeButton}/>
        </div>
        <div style={styles.cartBody}>
          <div style={styles.cartItems}>
          {
            !cartItems.length ?
            <img style={styles.emptyCartImage} src={ emptyCart }/> :
            cartItems.map(item => {
              let { itemCost, itemId, itemName, itemType, quantity, } = item
              return (
                <div style={styles.itemContainer} key={itemId + ':' + itemType}>
                  <ContentRemoveCircle
                    style={styles.itemRemove}
                    onClick={() => {this.handleItemRemoval(itemId, itemType)}}
                  />
                  <span style={styles.itemQuantity}>{quantity}</span>
                  <div style={styles.itemNameContainer}>
                    <span style={styles.itemName} onClick={() => {this.handleEditItem(item)}}>
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
        </div>
        <Divider style={styles.divider} />
        <div style={styles.cartFooter}>
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
            onClick={() => {}}
          />
          <Divider style={styles.divider} />
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
    display: 'flex',
    margin: 10,
  },
  addressAndTimeInnerContainer: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
  },
  cartBody: {
    maxHeight: 380,
    overflowY: 'auto',
  },
  cartContainer: {
    backgroundColor: '#fff',
    flex: 1.5,
    fontSize: 14,
    maxWidth: 350,
  },
  cartFooter: {
    bottom: 0,
    flex: '0 0 auto',
    WebkitBoxFlex: 0,
    width: '100%',
    zIndex: 10,
  },
  cartItems: {
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
    margin: 10
  },
  changeButton: {
    flex: 1,
  },
  checkoutButton: {
    display: 'block'
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
    maxWidth: 350,
  },
  itemContainer: {
    display: 'flex',
    flex: 1,
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
    flex: 1,
    minWidth: 180,
    padding: '10px 10px',
    textAlign: 'left',
  },
  itemPrice: {
    color: '#777',
    flex: '0 0 30px',
    padding: '15px 20px 15px 10px',
    textAlign: 'right',
    WebkitBoxFlex: 0,
    whiteSpace: 'nowrap',
  },
  itemQuantity: {
    flex: '0 0 20px',
    padding: '15px 0 0',
    textAlign: 'center',
  },
  itemRemove: {
    cursor: 'pointer',
    flex: '0 0 40px',
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showDialog: (dialog) => dispatch(actions.showDialog(dialog)),
    showEditItemInCartDialog: (itemId, form) => dispatch(actions.showEditItemInCartDialog(itemId, form)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
