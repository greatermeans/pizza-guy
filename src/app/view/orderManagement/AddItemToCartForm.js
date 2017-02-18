import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import actions from '../../actions'
import { IconButton, RadioButton, RadioButtonGroup, TextField, } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import _ from 'lodash'

class AddItemToCartForm extends Component {
  render() {
    const { quantity, instructions, itemType, selectedItem } = this.props.itemManagement
    const { itemDescription, types, } = selectedItem

    return (
      <div>
        <div>{itemDescription}</div>
        <div>{`$${types[itemType] * quantity}`}</div>
        <div>
          <RadioButtonGroup
            name={'type'}
            defaultSelected={itemType}
            onChange={(event, value) => this.props.setItemType(value)}
            style={styles.radioGroup}
          >
            {
              Object.keys(types).map(typeName => (
                <RadioButton
                  key={typeName}
                  value={typeName}
                  label={_.capitalize(typeName)}
                />
              ))
            }
          </RadioButtonGroup>
        </div>
        <div style={styles.quantityContainer}>
          <IconButton onTouchTap={()=> {
            let newCounter = quantity === 1 ? quantity : quantity - 1
            this.props.setQuantity(newCounter)
          }}>
            <ContentRemove />
          </IconButton>
          <div style={styles.quantity}>
            {quantity}
          </div>
          <IconButton
            onTouchTap={()=> {
              let newCounter = quantity >= 20 ? quantity : quantity + 1
              this.props.setQuantity(newCounter)
            }}
          >
            <ContentAdd style={styles.iconButton}/>
          </IconButton>
        </div>
        <TextField
          floatingLabelText={'Add Special Instructions Here!'}
          fullWidth
          hintText={
            'No pepporoni? Dressing on the side?\
             Let us know here. Note: any price alterations due to special requests \
             will be charged after your order is processed.'
          }
          value={instructions}
          onChange={(event, value) => this.props.setInstructions(value)}
          rows={4}
          rowsMax={5}
        />
      </div>
    )
  }
}

const styles = {
  iconButton: {
    border: '1px solid green'
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
  quantity: {
    alignSelf: 'center',
    boxShadow: '0 0 2px rgba(0,0,0,.3)',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    width: 20,
  },
  quantityContainer: {
    display: 'flex'
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

const mapStateToProps = (state) => {
  return {
    itemManagement: state.itemManagement,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInstructions: (quantity) => dispatch(actions.setInstructions(quantity)),
    setItemType: (quantity) => dispatch(actions.setItemType(quantity)),
    setQuantity: (quantity) => dispatch(actions.setQuantity(quantity)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemToCartForm)
