import React, { Component } from 'react'
import { List, ListItem, MakeSelectable} from 'material-ui'

let SelectableList = MakeSelectable(List)

export default class MenuItemList extends Component {

  render() {
    let { menuItems, onChangeList, defaultValue } = this.props

    return (
      <SelectableList defaultValue={defaultValue} style={styles.list} onChange={onChangeList}>
      {
        menuItems.map(datum => {
          let { id, name, } = datum
          return (
            <ListItem
              key={id}
              value={id}
              primaryText={name}
              style={styles.listItem}
            />
          )
        })
      }
      </SelectableList>
    )
  }
}

const styles = {
  list: {
  },
  listItem: {
    fontSize: 16,
  },
}
