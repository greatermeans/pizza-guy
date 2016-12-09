import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import { Divider, RaisedButton, } from 'material-ui'
import Formsy from 'formsy-react'
import {
  FormsyCheckbox, FormsyRadio, FormsyRadioGroup, FormsyText
} from 'formsy-material-ui/lib'

class NewAddressForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      canSubmit: false,
    }
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    })
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    })
  }

  submitForm(data) {
    debugger
    console.log(JSON.stringify(data, null, 4))
  }

  notifyFormError(data) {
    console.error('Form error:', data)
  }

  render() {
    return (
      <div className={ 'newAddress' }>
        <div className={ 'newAddressHeader' }>
          <h2 style={{marginRight: 15}}>Oh look, a new address!</h2>
          <h4 style={{marginTop: 8}}>Lets make sure everything is correct.</h4>
        </div>
        <br />
        <Divider />
        <div className={ 'section-title-cont' }>
          <div className={ 'sectionTitle' }>Contact</div>
        </div>
        <Formsy.Form
          onValid={this.enableButton.bind(this)}
          onInvalid={this.disableButton.bind(this)}
          onValidSubmit={this.submitForm.bind(this)}
          onInvalidSubmit={this.notifyFormError.bind(this)}
        >
          <div className={ 'flexDisplay' }>
            <FormsyText
              name={ 'firstName' }
              className={ 'textField' }
              validations={ 'isWords' }
              validationError={errorMessages.wordsError}
              required
              hintText={'First Name'}
              floatingLabelText={'What is your first name?'}
              style={styles.textField}
              inputStyle={styles.input}
              floatingLabelStyle={styles.floatingLabel}
              errorStyle={styles.error}
            />
            <FormsyText
              name={ 'lastName' }
              className={ 'textField' }
              validations={ 'isWords' }
              validationError={errorMessages.wordsError}
              required
              hintText={'Last Name'}
              floatingLabelText={'What is your last name?'}
              style={styles.textField}
              inputStyle={styles.input}
              floatingLabelStyle={styles.floatingLabel}
              errorStyle={styles.error}
            />
          </div>
          <div className={ 'flexDisplay' }>
            <FormsyText
              name={ 'email' }
              className={ 'textField' }
              validations={ 'isEmail' }
              validationError={errorMessages.email}
              required
              hintText={'Email'}
              floatingLabelText={'What is your email?'}
              style={styles.textField}
              inputStyle={styles.input}
              floatingLabelStyle={styles.floatingLabel}
              errorStyle={styles.error}
            />
            <FormsyText
              name={'phone'}
              validations={ 'isInt,isLength:9' }
              className={ 'textField' }
              validationError={`isInt:${errorMessages.numericError},isLength:${errorMessages.postal}`}
              required
              hintText={'Phone Number'}
              floatingLabelText={'What is your phone number?'}
              style={styles.textField}
              inputStyle={styles.input}
              floatingLabelStyle={styles.floatingLabel}
              errorStyle={styles.error}
            />
          </div>
          <div className={ 'section-title-cont' }>
            <div className={ 'sectionTitle' }>Address</div>
          </div>
          <div className={ 'flexDisplay' }>
            <FormsyText
              name={'address.street'}
              className={ 'textField' }
              required
              hintText={'Street Address'}
              floatingLabelText={'What is your street address?'}
              style={styles.textField}
              inputStyle={styles.input}
              floatingLabelStyle={styles.floatingLabel}
              errorStyle={styles.error}
            />
            <FormsyText
              name={'address.secondary'}
              className={ 'textField' }
              required
              hintText={'Apt., suite, floor, etc.'}
              floatingLabelText={'Do you live in a building?'}
              style={styles.textField}
              inputStyle={styles.input}
              floatingLabelStyle={styles.floatingLabel}
              errorStyle={styles.error}
            />
          </div>
          <div className={ 'flexDisplay' }>
            <FormsyText
              name={'address.city'}
              validations={ 'isWords' }
              validationError={errorMessages.wordsError}
              className={ 'textField' }
              required
              hintText={'City'}
              floatingLabelText={'What city do you live in?'}
              style={styles.textField}
              inputStyle={styles.input}
              floatingLabelStyle={styles.floatingLabel}
              errorStyle={styles.error}
            />
            <FormsyText
              name={'address.postal'}
              validations={ 'isInt,isLength:5' }
              className={ 'textField' }
              validationError={`isInt:${errorMessages.numericError},isLength:${errorMessages.postal}`}
              required
              hintText={'Postal Code'}
              floatingLabelText={'What\'s your post code?'}
              style={styles.textField}
              inputStyle={styles.input}
              floatingLabelStyle={styles.floatingLabel}
              errorStyle={styles.error}
            />
          </div>
          <FormsyText
            name={'instructions'}
            hintText={
              'e.g. check with doorman or call on arrival.'
            }
            floatingLabelText={'Delivery Instructions'}
            rows={2}
            rowsMax={4}
            fullWidth
          />
          <br />
          <br />
          <div className={ 'flexDisplay' }>
            <FormsyCheckbox
              name={'save'}
              label={'Save Address'}
              style={styles.checkStyle}
              defaultChecked
            />
            <br />
            <FormsyRadioGroup name={'shipSpeed'} defaultSelected={'home'} className={ 'flexDisplay' }>
              <FormsyRadio
                label={'Home'}
                value={'home'}
                style={styles.radioStyle}
              />
              <FormsyRadio
                value={'work'}
                label={'Work'}
                style={styles.radioStyle}
              />
              <FormsyRadio
                label={'Other'}
                value={'other'}
                style={styles.radioStyle}
              />
            </FormsyRadioGroup>
          </div>
          <br />
          <RaisedButton
            fullWidth
            primary
            label={'Continue To Payment Method'}
            disabled={!this.state.canSubmit}
          />
        </Formsy.Form>
      </div>
    )
  }
}

const errorMessages = {
  wordsError: 'Please only use letters',
  numericError: 'Please provide a number',
  email: 'Please provide a valid email',
  urlError: 'Please provide a valid URL',
  postal: 'Please provide a valid postal code',
  phone: 'Please provide a valid phone number'
}

const styles = {
  checkStyle: {
    marginBottom: 16,
    flex: 1,
    maxWidth: 200,
    marginRight: 100,
  },
  floatingLabel: {
    top: 27
  },
  error: {
    top: -4
  },
  input: {
    height: '80%'
  },
  radioStyle: {
    marginBottom: 16,
    flex: 1,
    maxWidth: 150
  },
  submitStyle: {
    marginTop: 32,
  },
  textField: {
    height: 60
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAddressForm)
