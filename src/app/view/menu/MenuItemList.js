import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const MenuItemList = ({menuItems, onChangeList, defaultValue, handleClick}) => {
  
  return (
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        {menuItems.map((tile) => (
          <GridTile
            key={tile.name}
            title={tile.name}
            subtitle={<b>{tile.description}</b>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            style={styles.gridTile}
            onTouchTap={() => {
              handleClick(tile)
            }}
          >
            <img src={'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'} />
          </GridTile>
        ))}
      </GridList>
    </div>
  )
}


const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  listItem: {
    fontSize: 16,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    marginTop: 15,
    width: 720,
    height: 450,
    overflowY: 'auto',
  },
  gridTile: {
    width: 350,
  },
}

export default MenuItemList
