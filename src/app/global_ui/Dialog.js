import React, { Component, } from 'react'
import { Dialog, IconButton, FlatButton, TextField, } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'

export default class GlobalDialog extends Component {
  componentWillMount() {
    this.setState({
      counter: 1,
      instructions: '',
    })
  }

  render() {
    const { addItem, dialog, hideDialog, } = this.props
    const { counter, } = this.state

    return (
      <Dialog
        title={dialog.title}
        titleStyle={styles.title}
        actions={[
          <FlatButton
            label={dialog.rejectCaption || ' '}
            primary
            onTouchTap={() => {
              this.props.hideDialog()
              if (dialog.rejectCallback) {
                dialog.rejectCallback()
              }
            }}
          />,
          <FlatButton
            label={dialog.acceptCaption || ' '}
            primary
            keyboardFocused
            onTouchTap={() => {
              hideDialog()
              addItem(dialog.item)
              if (dialog.acceptCallback) {
                dialog.acceptCallback()
              }
            }}
          />,
        ]}
        open={dialog.open || false}
        onRequestClose={this.props.hideDialog}
      >
        {
          dialog.item && dialog.item.filteredTypes.map(type => {
            let price = dialog.itemTypes.find(itemType => itemType.type_id === type.id).price
            return (
              <div style={styles.itemPrice}>
                Size: {type.name}
                <br />
                { (price * counter) + 'kr' }
              </div>
            )
          })
        }
        <div style={styles.itemDescription}>
          { dialog.content + '.'}
        </div>
        <div style={styles.counterContainer}>
          <IconButton onTouchTap={()=> {
            let newCounter = counter === 1 ? counter : counter - 1
            this.setState({counter: newCounter})
          }}>
            <ContentRemove />
          </IconButton>
          <div style={styles.counter}>
            {counter}
          </div>
          <IconButton onTouchTap={()=> {
            let newCounter = counter > 20 ? counter : counter + 1
            this.setState({counter: newCounter})
          }}>
            <ContentAdd />
          </IconButton>
        </div>
        <TextField
          hintText={
            'No pepporoni? Dressing on the side?\
             Let us know here. Note: any price alterations due to special requests \
             will be charged after your order is processed.'
           }
          floatingLabelText={'Add Special Instructions Here!'}
          rows={4}
          rowsMax={5}
          fullWidth
          onChange={(event, value)=> {
            this.setState({instructions: value})
          }}
        />
      </Dialog>
    )
  }
}

const styles = {
  counter: {
    boxShadow: '0 0 2px rgba(0,0,0,.3)',
    borderRadius: 8,
    width: 44,
    alignSelf: 'center'
  },
  counterContainer: {
    display: 'flex'
  },
  itemDescription: {
    textAlign: '-webkit-auto'
  },
  itemPrice: {
    textAlign: '-webkit-auto',
    fontWeight: 600,
    marginBottom: 20,
  },
  title: {
    textAlign: '-webkit-auto',
    paddingBottom: 10
  },
}
