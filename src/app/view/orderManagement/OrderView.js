import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import { CircularProgress, } from 'material-ui'
import actions from '../../actions'
import Cart from './Cart'
import CategoryCard from './CategoryCard'

class OrderView extends Component {
  render() {
    const { categorizedItems, } = this.props.items
    return (
      <div style={styles.orderViewContainer}>
        <div style={styles.categorizedItems}>
          {
            categorizedItems && categorizedItems.length ? (
              categorizedItems.map(category => category.items.length ? (
                <CategoryCard
                  key={category.categoryId}
                  showAddItemToCartDialog={this.props.showAddItemToCartDialog}
                  setSelectedItem={this.props.setSelectedItem}
                  {...category}
                />
              ) : null)
            ) : <CircularProgress />
          }
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
  orderViewContainer: {
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderView)
