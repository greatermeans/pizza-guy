import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Paper } from 'material-ui'

class CartView extends Component {

  render() {
    return (
      <Paper style={styles.menu} zDepth={3} rounded >
        <CartHeader />
        <CartItemList />
        <CartFooter />
      </Paper>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, null)(CartView)
