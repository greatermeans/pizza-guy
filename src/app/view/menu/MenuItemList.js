import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ContentAddBox from 'material-ui/svg-icons/content/add-box'

const MenuItemList = ({menuItems, onChangeList, handleClick, selectedCourseDetails}) => {
  let moreThanFourItems = menuItems.length > 4
  let numberOfColumns = moreThanFourItems ? 3 : 2
  let tileWidth = moreThanFourItems ? 300 : 350
  let tileHeight = moreThanFourItems ? 180 : 210
  let styles = {
    iconButton: {
      marginRight: 15,
      marginBottom: 10
    },
    iconStyle: {
      color: 'green',
      width: 40,
      height: 40
    },
    list: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    listItem: {
      fontSize: 16,
    },
    root: {
      justifyContent: 'space-around',
      flex: 4,
      overflowY: 'auto',
      margin: 15
    },
    gridList: {
      marginTop: 5,
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
    menuItemsHeader: {
      textAlign: '-webkit-center'
    }
  }

  return (
    <div style={styles.root}>
      <div style={styles.menuItemsHeader}>
        <h3>{selectedCourseDetails && selectedCourseDetails.name}</h3>
        <h5>{selectedCourseDetails && selectedCourseDetails.description}</h5>
      </div>
      <GridList
        cellHeight={tileHeight}
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
              <IconButton style={styles.iconButton} iconStyle={styles.iconStyle}>
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
