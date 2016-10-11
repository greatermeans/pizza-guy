import axios from 'axios';
import globalConfig from './index.js'

export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT_FAILURE = 'UPDATE_ACCOUNT_FAILURE';
export const RESET_UPDATE_ACCOUNT_STATE = 'RESET_UPDATE_ACCOUNT_STATE';

const ROOT_URL = globalConfig.API

export function updateAccount(props, tokenFromStorage) {
const request = axios.post(`${ROOT_URL}/users/edit`,
    props, {headers: { Authorization: tokenFromStorage }})

  return {
    type: UPDATE_ACCOUNT,
    payload: request
  };
}

export function updateAccountSuccess() {
  return {
    type: UPDATE_ACCOUNT_SUCCESS
  };
}

export function updateAccountFailure(error) {
  return {
    type: UPDATE_ACCOUNT_FAILURE,
    payload: error
  };
}

export function resetUpdateAccountState() {
  return {
    type: RESET_UPDATE_ACCOUNT_STATE
  };
}
