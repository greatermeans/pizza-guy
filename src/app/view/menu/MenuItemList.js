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
    container: {
      float: 'left'
    },
    gridList: {
      marginTop: 5,
      width: '100%',
      height: 'auto',
      overflowY: 'auto',
      marginBottom: 15,
    },
    gridTile: {
      width: 300,
      flex: 1,
      cursor: 'pointer',
    },
    iconButton: {
      marginRight: 15,
      marginBottom: 10,
      float: 'right',
      paddingLeft: 10,
      paddingTop: 0
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
    menuItemsHeader: {
      textAlign: '-webkit-center'
    },
    root: {
      justifyContent: 'space-around',
      flex: 4,
      overflowY: 'auto',
      margin: 15
    },
    subtitleStyle: {
      color: 'rgb(0, 188, 212)',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: 225
    },
    titleStyle: {
      color: 'rgb(0, 188, 212)'
    },
  }

  return (
    <div style={styles.root}>
      <div style={styles.menuItemsHeader}>
        <h3>{selectedCourseDetails && selectedCourseDetails.name}</h3>
        <h5>{selectedCourseDetails && selectedCourseDetails.description}</h5>
      </div>
      <GridList
        cellHeight={55}
        style={styles.gridList}
        cols={numberOfColumns}
        padding={15}
      >
        {menuItems.map((tile) => (
          <GridTile
            key={tile.name}
            style={styles.gridTile}
            onTouchTap={() => {
              handleClick(tile)
            }}
          >
          <div style={styles.container}>
            <div style={styles.titleStyle}>{tile.name}</div>
            <div style={styles.subtitleStyle}>{tile.description}</div>
          </div>
          <IconButton style={styles.iconButton} iconStyle={styles.iconStyle}>
            <ContentAddBox color={'green'}/>
          </IconButton>
          </GridTile>
        ))}
      </GridList>
    </div>
  )
}

export default MenuItemList
