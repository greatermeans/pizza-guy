import React, { Component, } from 'react'
import { Dialog, FlatButton, IconButton, RadioButton, RadioButtonGroup, TextField, } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'

export default class GlobalDialog extends Component {
  componentWillMount() {
    const { selected, } = this.props
    this.setState({
      quantity: 1,
      instructions: '',
      type: selected
    })
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { selected, } = nextProps
    this.setState({
      type: selected
    })
  }

  render() {
    const { addItem, dialog, hideDialog, } = this.props
    const { quantity, } = this.state
    const { itemTypes, filteredTypes, selected } = dialog

    return (
      <Dialog
        title={dialog.title}
        titleStyle={styles.title}
        actions={[
          <FlatButton
            label={dialog.rejectCaption || ' '}
            primary
            onTouchTap={() => {
              hideDialog()
              this.setState({
                quantity: 1,
                instructions: '',
                type: null
              })
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
              addItem({...dialog.item, ...this.state})
              if (dialog.acceptCallback) {
                dialog.acceptCallback()
              }
            }}
          />,
        ]}
        open={dialog.open || false}
        onRequestClose={() => {
          hideDialog()
          this.setState({
            quantity: 1,
            instructions: '',
            type: null
          })
        }}
      >
        <div style={styles.itemDescription}>
          {dialog.content}
        </div>
        <RadioButtonGroup
          name={'type'}
          defaultSelected={selected}
          onChange={(event, value) => {this.setState({type: value})}}
          style={styles.radioGroup}
        >
          {
            filteredTypes && Object.keys(filteredTypes).map(filteredTypeId => {
              let price = itemTypes.find(itemType => itemType.type_id === parseInt(filteredTypeId, 10)).price
              return (
                <RadioButton
                  key={filteredTypeId}
                  value={filteredTypeId}
                  label={filteredTypes[filteredTypeId].name + ': ' + (price * quantity) + 'kr'}
                />
              )
            })
          }
        </RadioButtonGroup>
        <div style={styles.quantityContainer}>
          <IconButton onTouchTap={()=> {
            let newCounter = quantity === 1 ? quantity : quantity - 1
            this.setState({quantity: newCounter})
          }}>
            <ContentRemove />
          </IconButton>
          <div style={styles.quantity}>
            {quantity}
          </div>
          <IconButton onTouchTap={()=> {
            let newCounter = quantity > 20 ? quantity : quantity + 1
            this.setState({quantity: newCounter})
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
  quantity: {
    boxShadow: '0 0 2px rgba(0,0,0,.3)',
    borderRadius: 8,
    width: 44,
    alignSelf: 'center'
  },
  quantityContainer: {
    display: 'flex'
  },
  itemDescription: {
    textAlign: '-webkit-auto',
    marginBottom: 10,
  },
  itemPrice: {
    textAlign: '-webkit-auto',
    fontWeight: 600,
    marginBottom: 20,
  },
  radioGroup: {
    textAlign: '-webkit-auto',
    marginBottom: 10,
  },
  title: {
    textAlign: '-webkit-auto',
    paddingBottom: 10
  },
}
