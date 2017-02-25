import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import actions from '../../actions'
import Geosuggest from 'react-geosuggest'
import Headline from '../../ui/typography/Headline'
import TextField from 'material-ui/TextField'

class ChangeAddressForm extends Component {
  render() {
    return (
      <div style={styles.addressFormContainer}>
        <Headline>
          Where shall we send your order?
        </Headline>
        <Geosuggest
          placeholder={'Type in your desired address!'}
          onSuggestSelect={(result) => this.props.processAddressComponents(result)}
          location={new google.maps.LatLng(42.0834, 71.3967)}
          country="US"
          radius="100"
          types={['geocode']}
        />
        <Headline>
          When do you want to receive your order?
        </Headline>
        <TextField
          disabled
          floatingLabelText={'When would you like your order?'}
          onChange={(event, value) => {}}
          style={styles.textFieldCenter}
          value={'Delivery, ASAP (50-60 min)'}
        />
      </div>
    )
  }
}

const styles = {
  addressFormContainer: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAddressForm)
