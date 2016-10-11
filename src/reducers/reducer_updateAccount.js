import { UPDATE_ACCOUNT, UPDATE_ACCOUNT_SUCCESS, 
  UPDATE_ACCOUNT_FAILURE, RESET_UPDATE_ACCOUNT_STATE } 
  from '../actions/updateAccount';

const INITIAL_STATE = {accountUpdated: false, error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  
  switch(action.type) {
    
    case UPDATE_ACCOUNT:
    return { ...state, 
      accountUpdated: false, 
      error: null, 
      loading: true};
    
    case UPDATE_ACCOUNT_SUCCESS:
    return { ...state, 
      accountUpdated: true, 
      error: null, 
      loading: false};
    
    case UPDATE_ACCOUNT_FAILURE:
    error = action.payload.data || {message: action.payload.message}
    return { ...state, 
      accountUpdated: false, 
      error: error, 
      loading: false};
    
    case RESET_UPDATE_ACCOUNT_STATE:
    return { ...state, 
      accountUpdated: false, 
      error: null, 
      loading: false};
    
    default:
    return state;
  }
}
