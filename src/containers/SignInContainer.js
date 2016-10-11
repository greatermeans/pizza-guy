import React from 'react';
import SignInForm from '../components/SignInForm.js';
import {signInUser, signInUserSuccess, signInUserFailure } from '../actions/users';
import { reduxForm } from 'redux-form';

const validate = values => {
  const errors = {}
  const requiredFields = [ 'email', 'password' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

const signIn = (values, dispatch) => {
  return new Promise((resolve, reject) => {
   dispatch(signInUser(values))
    .then((response) => {
        let data = response.payload.data;
        if(response.payload.status !== 200) {
          dispatch(signInUserFailure(response.payload));
           reject(data); 
         } else {
          sessionStorage.setItem('jwtToken', data.auth_token);
          dispatch(signInUserSuccess(response.payload));
          resolve();
        }
      });
  });
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

SignInForm.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'SignInForm',
  fields: ['email', 'password'],
  null,
  null,
  validate,
  signIn
}, mapStateToProps, null)(SignInForm);
