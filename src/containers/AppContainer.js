import { connect } from 'react-redux';
import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken } from '../actions/users';
import App from '../components/App.js';
import { browserHistory } from 'react-router'

const mapDispatchToProps = (dispatch) => {
  return {
  	 loadUserFromToken: () => {
      return new Promise((resolve, reject) => {
    	 	let token = sessionStorage.getItem('jwtToken');
    	 	if(!token || token === '') {
          browserHistory.push('/')
          return;
    	 	}
        dispatch(meFromToken(token))
          .then((response) => {
            if (!response.error) {
            	sessionStorage.setItem('jwtToken', response.payload.config.headers.Authorization);
              dispatch(meFromTokenSuccess(response.payload))
              resolve()
            } else {
            	sessionStorage.removeItem('jwtToken');
              dispatch(meFromTokenFailure(response.payload));
              reject(data)
            }
          });
        })
  	 },
     resetMe: () =>{
     	sessionStorage.removeItem('jwtToken'); 
     	dispatch(resetToken());
     }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
