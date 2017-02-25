import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import actions from '../../actions'
import Cart from '../orderManagement/Cart'
import { Checkbox, RadioButton, RadioButtonGroup, TextField, } from 'material-ui'
import Display1 from '../../ui/typography/Display1'
import Display2 from '../../ui/typography/Display2'

class ConfirmAddressView extends Component {
  render() {
    const { UI, user, } = this.props
    const { addresses, defaultAddressId, } = user
    if (addresses[defaultAddressId]) {
      const {
        addressType, city, defaultAddress, phoneNumber, state, streetAddress, streetAddressTwo,
        saveAddress, zipcode,
      } = addresses[defaultAddressId]
    }
    const requestInProgress = (UI.requests && UI.requests.addresses) ||
      !(UI.requested && UI.requested.addresses)
    console.log(UI)
    console.log(addresses)
    return !requestInProgress ? (
      <div style={styles.confirmAddressViewContainer}>
        <div style={styles.addressFormContainer}>
          <Display2 noLeadMargin>{'Hey, it\'s a new Address!'}</Display2>
          <Display1 noLeadMargin>{'Let\'s make sure we got everything right.'}</Display1>
          <TextField
            disabled
            floatingLabelText={'When would you like your order?'}
            onChange={(event, value) => {}}
            style={styles.textFieldCenter}
            value={'Delivery, ASAP (50-60 min)'}
          />
          <div style={styles.textFieldContainer}>
            <TextField
              floatingLabelText={'Street Address'}
              onChange={(event, value) => this.props.setStreetAddress(value)}
              style={styles.textFieldLeft}
              value={streetAddress || ''}
            />
            <TextField
              floatingLabelText={'Suite, Apt, floor?'}
              onChange={(event, value) => this.props.setStreetAddressTwo(value)}
              style={styles.textFieldLeft}
              value={streetAddressTwo || ''}
            />
          </div>
          <div style={styles.textFieldContainer}>
            <TextField
              floatingLabelText={'City'}
              onChange={(event, value) => this.props.setCity(value)}
              style={styles.textFieldLeft}
              value={city || ''}
            />
            <TextField
              floatingLabelText={'State'}
              onChange={(event, value) => this.props.setState(value)}
              style={styles.textFieldLeft}
              value={state || ''}
            />
            <TextField
              floatingLabelText={'Postal Code'}
              onChange={(event, value) => this.props.setZipcode(value)}
              style={styles.textFieldLeft}
              value={zipcode || ''}
            />
          </div>
          <div style={styles.textFieldContainer}>
            <TextField
              floatingLabelText={'Phone Number'}
              onChange={(event, value) => this.props.setPhoneNumber(value)}
              style={styles.textFieldRight}
              value={phoneNumber || ''}
            />
          </div>
          <div style={styles.textFieldContainer}>
            <div style={styles.textFieldLeft}>
              <Checkbox
                name={'saveAddress'}
                label={'Save Address'}
                defaultChecked={saveAddress}
                onCheck={() => this.props.setSaveAddress(!saveAddress)}
              />
              <Checkbox
                name={'setAsDefault'}
                label={'Set Address As Default'}
                defaultChecked={defaultAddress}
                onCheck={() => this.props.setAddressAsDefault(!defaultAddress)}
              />
            </div>
            <RadioButtonGroup
              defaultSelected={addressType || 'home'}
              name={'addressType'}
              onChange={(event, value) => this.props.setAddressType(value)}
              style={styles.textFieldRight}
            >
              <RadioButton
                label={'Home'}
                style={styles.radioStyle}
                value={'home'}
              />
              <RadioButton
                label={'Work'}
                style={styles.radioStyle}
                value={'work'}
              />
              <RadioButton
                label={'Other'}
                style={styles.radioStyle}
                value={'other'}
              />
            </RadioButtonGroup>
          </div>
        </div>
        <Cart />
      </div>
    ) : null
  }
}

const styles = {
  addressFormContainer: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  confirmAddressViewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textFieldContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  textFieldCenter: {
    textAlign: 'center',
    marginLeft: 220,
  },
  textFieldLeft: {
    flex: 1,
    marginRight: 50,
    marginLeft: 50,
  },
  textFieldRight: {
    flex: 1,
    marginRight: 50,
    marginLeft: 50,
  },
}

const mapStateToProps = (state) => {
  return {
    UI: state.UI,
    user: state.user,
    userManagement: state.userManagement,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAddressAsDefault: (addressIsDefault) => dispatch(actions.setAddressAsDefault(addressIsDefault)),
    setAddressType: (addressType) => dispatch(actions.setAddressType(addressType)),
    setCity: (city) => dispatch(actions.setCity(city)),
    setPhoneNumber: (phoneNumber) => dispatch(actions.setPhoneNumber(phoneNumber)),
    setSaveAddress: (saveAddress) => dispatch(actions.setSaveAddress(saveAddress)),
    setState: (state) => dispatch(actions.setState(state)),
    setStreetAddress: (streetAddress) => dispatch(actions.setStreetAddress(streetAddress)),
    setZipcode: (zipcode) => dispatch(actions.setZipcode(zipcode)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmAddressView)
