import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import actions from '../../actions'
import { Checkbox, RadioButton, RadioButtonGroup, TextField, } from 'material-ui'
import Geosuggest from 'react-geosuggest'

class ChangeAddressForm extends Component {
  render() {
    const {
      addressIsDefault, addressType, phoneNumber, streetAddressTwo, saveAddress,
    } = this.props.userManagement

    return (
      <div style={styles.addressFormContainer}>
        <Geosuggest
          placeholder={'Type in your desired address!'}
          onSuggestSelect={(result) => console.log(result)}
          location={new google.maps.LatLng(42.0834, 71.3967)}
          country="US"
          radius="100"
          types={['geocode']}
        />
        <TextField
          disabled
          floatingLabelText={'When would you like your order?'}
          onChange={(event, value) => {}}
          style={styles.textFieldCenter}
          value={'Delivery, ASAP (50-60 min)'}
        />
        <div style={styles.textFieldContainer}>
          <TextField
            floatingLabelText={'Suite, Apt, floor?'}
            onChange={(event, value) => this.props.setStreetAddressTwo(value)}
            style={styles.textFieldLeft}
            value={streetAddressTwo || ''}
          />
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
              defaultChecked={addressIsDefault}
              onCheck={() => this.props.setAddressAsDefault(!addressIsDefault)}
            />
          </div>
          <RadioButtonGroup
            defaultSelected={addressType}
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
    )
  }
}

const styles = {
  addressFormContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
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
    userManagement: state.userManagement,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewAddress: (address) => dispatch(actions.addNewAddress(address)),
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAddressForm)
