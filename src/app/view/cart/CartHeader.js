import React from 'react'
import Toggle from 'material-ui/Toggle'

const styles = {
  cartHeader: {
    display: 'flex',
    marginTop: 20,
    marginBottom: 15
  },
  toggle: {
    marginBottom: 16,
    flex: 1,
  },
  thumbOff: {
    backgroundColor: '#ff9d9d',
  },
  trackOff: {
    backgroundColor: '#ffcccc',
  },
  thumbSwitched: {
    backgroundColor: '#ff9d9d',
  },
  trackSwitched: {
    backgroundColor: 'red',
  },
  labelStyle: {
    fontWeight: 500,
    flex: 1,
  },
}

const CartHeader = ({deliverable}) => {

  return (
    <div style={styles.cartHeader}>
      <Toggle
        label={'Take Out'}
        defaultToggled={deliverable}
        thumbStyle={styles.thumbOff}
        trackStyle={styles.trackOff}
        thumbSwitchedStyle={styles.thumbSwitched}
        trackSwitchedStyle={styles.trackSwitched}
        labelStyle={styles.labelStyle}
        style={{width: '55%'}}
      />
      <div style={{flex: 1, fontWeight: 500}}>Delivery</div>
    </div>
  )
}

export default CartHeader
