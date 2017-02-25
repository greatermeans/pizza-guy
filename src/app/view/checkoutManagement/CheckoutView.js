import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import actions from '../../actions'
import Cart from '../orderManagement/Cart'

class CheckoutView extends Component {
  render() {
    return (
      <div style={styles.checkoutViewContainer}>
        <div style={styles.categorizedItems}>
        </div>
        <Cart />
      </div>
    )
  }
}

const styles = {
  categorizedItems: {
    flex: 4,
    overflowY: 'auto',
  },
  checkoutViewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedItem: (selectedItem) => dispatch(actions.setSelectedItem(selectedItem)),
    showAddItemToCartDialog: (form) => dispatch(actions.showAddItemToCartDialog(form)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutView)
