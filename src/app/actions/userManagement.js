import A from '../const/actionTypes'

export default {
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
  setZipcode: (zipcode) => {
    return (dispatch, getState) => {
      dispatch({
        type: A.SET_ZIPCODE,
        zipcode
      })
    }
  },

}
