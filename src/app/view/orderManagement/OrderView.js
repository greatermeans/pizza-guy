import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import { CircularProgress, } from 'material-ui'
import actions from '../../actions'
import CategoryCard from './CategoryCard'

class OrderView extends Component {

  render() {
    const { categorizedItems, } = this.props.items
    return (
      <div style={styles.orderviewContainer}>
        <div style={styles.categorizedItems}>
          {
            categorizedItems && categorizedItems.length ? (
              categorizedItems.map(category => category.items.length ? (
                <CategoryCard key={category.categoryId} {...category} />
              ) : null)
            ) : <CircularProgress />
          }
        </div>
      </div>
    )
  }
}

const styles = {
  orderviewContainer: {
    display: 'flex'
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderView)
