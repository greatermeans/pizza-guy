import React from 'react'
import { Card, CardHeader, CardText, } from 'material-ui'
import injectSheet from 'react-jss'
import ItemCard from './ItemCard'

const CategoryCard = ({ categoryDescription, categoryId, categoryName, classes, items, }) => (
  <Card key={categoryId} style={styles.cardContainer}>
    <CardHeader
      actAsExpander
      title={categoryName}
      showExpandableButton
      style={styles.categoryTitle}
      subtitle={categoryDescription}
    />
    <CardText expandable>
      <div style={styles.categoryInnerContainer}>
        {
          items.map(item => (
            <div className={classes.itemOutterContainer}>
              <ItemCard key={item.itemId} {...item}/>
            </div>
          ))
        }
      </div>
    </CardText>
  </Card>
)

const styles = {
  cardContainer: {
    marginBottom: 15,
  },
  categoryTitle: {
    borderColor: '#cacaca',
    backgroundColor: '#efefef',
    display: 'flex',
    alignItems: 'center',
    height: 47,
    marginBottom: 0,
    cursor: 'pointer',
  },
  itemOutterContainer: {
    background: '#FFF',
    borderColor: '#cacaca',
    borderStyle: 'dotted',
    borderWidth: '2px 0 0',
    cursor: 'pointer',
    display: 'flex',
    width: '48%',
    zIndex: 1010,
    '&:nth-child(odd)': {
      borderWidth: '0 1px 1px 0',
    },
    '&:nth-child(even)': {
      borderWidth: '0 0 1px 0',
    },
    '&:hover': {
      border: '2px solid orange',
    }
  },
  categoryInnerContainer: {
    backgroundColor: '#FFF',
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: 50,
  }
}

export default injectSheet(styles)(CategoryCard)
