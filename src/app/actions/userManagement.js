import A from '../const/actionTypes'
import actions from '.'
import _ from 'lodash'

const getShortName = (components, componentType) => {
  return _.find(components, (o) => _.includes(o.types, componentType)).short_name
}

export default {
  processAddressComponents: (addressComponents) => {
    return (dispatch, getState) => {
      let components = addressComponents.gmaps.address_components
      let streetNumber = getShortName(components, 'street_number')
      let streetAddress = getShortName(components, 'route')
      let city = getShortName(components, 'locality')
      let state = getShortName(components, 'administrative_area_level_1')
      let zipcode = getShortName(components, 'postal_code')

      dispatch(actions.setCity(city))
      dispatch(actions.setStreetAddress(`${streetNumber} ${streetAddress}`))
      dispatch(actions.setState(state))
      dispatch(actions.setZipcode(zipcode))
    }
  },
  setAddressAsDefault: (addressIsDefault) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.ADDRESS_IS_DEFAULT,
        addressIsDefault
      })
    }
  },
  setAddressType: (addressType) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_ADDRESS_TYPE,
        addressType
      })
    }
  },
  setCity: (city) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_CITY,
        city
      })
    }
  },
  setPhoneNumber: (phoneNumber) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_PHONE_NUMBER,
        phoneNumber
      })
    }
  },
  setSaveAddress: (saveAddress) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_SAVE_ADDRESS,
        saveAddress
      })
    }
  },
  setState: (state) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_STATE,
        state
      })
    }
  },
  setStreetAddress: (streetAddress) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_STREET_ADDRESS,
        streetAddress
      })
    }
  },
  setStreetAddressTwo: (streetAddressTwo) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_STREET_ADDRESS_TWO,
        streetAddressTwo
      })
    }
  },
  setZipcode: (zipcode) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_ZIPCODE,
        zipcode
      })
    }
  },
  showChangeAddressDialog: (changeAddressForm) => {
    return (dispatch, getState) => {
      dispatch(actions.showDialog({
        acceptCallback: () => dispatch(actions.addNewAddress()),
        acceptCaption: 'UPDATE',
        content: changeAddressForm,
        rejectCaption: 'CANCEL',
      }))
    }
  },
}
