import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, ListItem, Paper, Divider } from 'material-ui'
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'

class CartView extends Component {

  render() {
    let { cart, menuItems, types, } = this.props
    let total = 0
    return (
      <Paper style={styles.cart} zDepth={3} rounded >
        <List>
          {
            menuItems[78] && Object.keys(cart).map(itemId => {
              let { quantity, type } = cart[itemId]
              let item = menuItems[itemId]
              let { price } = item.item_types.find(itemType => {
                return itemType.item_id === parseInt(itemId, 10) && itemType.type_id === parseInt(type, 10)
              })
              total += price * quantity
              return (
                <ListItem innerDivStyle={styles.root}
                  key={itemId}
                  leftIcon={<ContentRemoveCircle style={styles.icon}/>}
                  primaryText={
                    <div style={{marginTop: 10}}>
                      <span style={{fontSize: 16, marginRight: 8}}>{quantity+'x'}</span>
                      <span style={{fontWeight: 400, fontSize: 20}}>{menuItems[itemId].name}</span>
                      <span style={{float: 'right', fontSize: 16}}>{quantity*price}</span>
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
      </Paper>
    )
  }
}

const styles = {
  cart: {
    flex: 2,
    width: 200,
    marginTop: 15,
    marginRight: 15
  },
  icon: {
    margin: 2,
    height: 20,
    width: 20
  },
  root: {
    paddingLeft: 16
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    menuItems: state.menuItems,
    types: state.types
  }
}

export default connect(mapStateToProps, null)(CartView)
