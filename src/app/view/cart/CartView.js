import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, ListItem, Paper, Divider } from 'material-ui'
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle'
import CartHeader from './CartHeader'

class CartView extends Component {

  render() {
    let { cart, deliverable, menuItems, } = this.props
    let total = 0
    return (
      <Paper style={styles.paper} zDepth={1} rounded>
        <div style={{marginLeft: 20, marginRight: 20}}>
          <CartHeader deliverable={deliverable}/>
          <Divider/>
          <div style={{textAlign: 'left', margin: 15, fontWeight: 700}}>Your Bag</div>
          <Divider/>
          <List>
            {
              menuItems[828] && Object.keys(cart).map(itemId => {
                let { quantity, type } = cart[itemId]
                let item = menuItems[itemId]
                let { price } = item.item_types.find(itemType => {
                  return itemType.item_id === parseInt(itemId, 10) && itemType.type_id === parseInt(type, 10)
                })
                total += price * quantity
                return (
                  <ListItem innerDivStyle={styles.listItem}
                    key={itemId}
                    leftIcon={<ContentRemoveCircle style={styles.icon}/>}
                    primaryText={
                      <div style={{marginTop: 10}}>
                        <span style={{fontSize: 16, marginRight: 8}}>{quantity + 'x'}</span>
                        <span style={{fontWeight: 400, fontSize: 20}}>{menuItems[itemId].name}</span>
                        <span style={{float: 'right', fontSize: 16}}>{quantity * price}</span>
                      </div>
                    }
                  />
                )
              })
            }
            <Divider/>
            <ListItem
              primaryText={total}
            />
          </List>
        </div>
      </Paper>
    )
  }
}

const styles = {
  icon: {
    margin: 2,
    height: 20,
    width: 20
  },
  listItem: {
    paddingLeft: 16
  },
  paper: {
    flex: 1.5,
    height: 640,
    marginTop: 30,
    marginRight: 30
  },
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    deliverable: state.user.deliverable,
    menuItems: state.menuItems,
    types: state.types
  }
}

export default connect(mapStateToProps, null)(CartView)
