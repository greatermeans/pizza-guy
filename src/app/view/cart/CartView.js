import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, ListItem, Paper, Divider } from 'material-ui'
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'

class CartView extends Component {

  render() {
    let { cart, items, types, } = this.props

    return (
      <Paper style={styles.menu} zDepth={3} rounded >
        <List>
        {
          Object.keys(cart).map(itemId => {
            let { instructions, quantity, type, } = cart[itemId]
            debugger
            return (
              <ListItem
                leftAvatar={<ContentRemoveCircle/>}
                rightIconButton={<EditorModeEdit/>}
                primaryText={items[item].name}
                secondaryText={
                  <p>
                    <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
                    I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                  </p>
                }
                secondaryTextLines={2}
              />
            )
          })
        }

        <Divider inset={true} />
      </List>
      </Paper>
    )
  }
}

const styles = {
  menu: {
    flex: 2
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    items: state.items,
    types: state.types
  }
}

export default connect(mapStateToProps, null)(CartView)
