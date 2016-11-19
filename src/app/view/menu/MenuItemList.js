import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ContentAddBox from 'material-ui/svg-icons/content/add-box'

const MenuItemList = ({menuItems, onChangeList, defaultValue, handleClick}) => {
  let numberOfColumns = menuItems.length > 10 ? 3 : 2
  let tileWidth = menuItems.length > 10 ? 300 : 350
  let styles = {
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
      flex: 4,
    },
    gridList: {
      marginTop: 15,
      width: '100%',
      height: 'auto',
      overflowY: 'auto',
      marginBottom: 15,
    },
    gridTile: {
      width: tileWidth,
      flex: 1,
      cursor: 'pointer'
    },
  }

  return (
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
        cols={numberOfColumns}
        padding={25}
      >
        {menuItems.map((tile) => (
          <GridTile
            key={tile.name}
            title={tile.name}
            subtitle={<b>{tile.description}</b>}
            actionIcon={
              <IconButton>
                <ContentAddBox color={'green'}/>
              </IconButton>
            }
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

export default MenuItemList
