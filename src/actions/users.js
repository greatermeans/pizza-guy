import axios from 'axios';
import globalConfig from './index.js'

export const GET_USER_DATA = 'GET_USER_DATA';

export const ME_FROM_TOKEN = 'ME_FROM_TOKEN';
export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS';
export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE';
export const RESET_TOKEN = 'RESET_TOKEN';

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const RESET_USER = 'RESET_USER';

export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

export const UPDATE_USER_ACCOUNT = 'UPDATE_USER_ACCOUNT';

export const LOGOUT_USER = 'LOGOUT_USER';

export const VALIDATE_EMAIL = 'VALIDATE_EMAIL';

const ROOT_URL = globalConfig.API
const HEADER = globalConfig.header

export function validateEmail(values) {
  const request = axios.post(`${ROOT_URL}/users/validate/fields`,
    {user: values});

  return {
    type: VALIDATE_EMAIL,
    payload: request
  };
}

export function getUserData(userId){
  const request = axios.get(`${ROOT_URL}/users/${userId}`,HEADER)
  return {
    type: GET_USER_DATA,
    payload: request
  }
}

export function meFromToken(tokenFromStorage) {
  const request = axios.get(`${ROOT_URL}/users`,HEADER)
  return {
    type: ME_FROM_TOKEN,
    payload: request
  };
}

export function meFromTokenSuccess(currentUser) {
  return {
    type: ME_FROM_TOKEN_SUCCESS,
    payload: currentUser
  };
}

export function meFromTokenFailure(error) {
  return {
    type: ME_FROM_TOKEN_FAILURE,
    payload: error
  };
}

export function resetToken() {
  return {
    type: RESET_TOKEN
  };
}

export function signUpUser(formValues) {
  const request = axios.post(`${ROOT_URL}/users`, {user: formValues});
  return {
    type: SIGNUP_USER,
    payload: request
  };
}

export function signUpUserSuccess(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user
  };
}

export function signUpUserFailure(error) {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error
  };
}


export function resetUser() {
  return {
    type: RESET_USER,
  };
}

export function signInUser(formValues) {
  const request = axios.post(`${ROOT_URL}/signin`,
    {user: formValues}
  );

  return {
    type: SIGNIN_USER,
    payload: request
  };
}

// what is user.data.auth_token here
export function signInUserSuccess(user) {

  const request = axios.get(`${ROOT_URL}/users`,{
    headers: {Authorization: user.data.auth_token}
  })

  return {
    type: SIGNIN_USER_SUCCESS,
    payload: request
  };
}

export function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}
export function updateUserAccount(values) {
  return {
    type: UPDATE_USER_ACCOUNT,
    payload:values
  };
}
