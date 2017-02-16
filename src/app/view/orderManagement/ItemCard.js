import React from 'react'

const ItemCard = ({ itemDescription, itemName, }) => (
  <div style={styles.itemInnerContainer}>
    <div style={styles.flexBox}>
      {itemName}
    </div>
    <div style={styles.itemDescription}>
      {itemDescription}
    </div>
  </div>
)

const styles = {
  itemInnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #FFF',
    cursor: 'pointer',
    padding: '5px 5px 0',
    width: '100%',
  },
  itemDescription: {
    marginLeft: 25,
  },
}

export default ItemCard
