import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import { Checkbox, Divider, RaisedButton, Tab, Tabs, TextField } from 'material-ui'

class NewAddress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      secondaryAddress: '',
      city: '',
      country: 'Sweden',
      postalCode: '',
      deliveryInstructions: '',
      addressType: 'home',
      saveAddress: true
    }
  }

  render() {
    return (
      <div className={ 'newAddress' }>
        <div className={ 'newAddressHeader' }>
          <h2 style={{marginRight: 15}}>Oh look, a new address!</h2>
          <h4 style={{marginTop: 8}}>Let's make sure everything is correct.</h4>
        </div>
        <br />
        <Divider />
        <br />
        <div className={ 'section-title-cont' }>
          <div className={ 'sectionTitle' }>Contact</div>
        </div>
        <div className={ 'flexDisplay' }>
          <TextField
            hintText={'First Name'}
            value={this.state.firstName}
            onChange={(event, value)=> {
              this.setState({firstName: value})
            }}
            className={ 'textField' }
          />
          <TextField
            hintText={'Last Name'}
            value={this.state.lastName}
            onChange={(event, value)=> {
              this.setState({lastName: value})
            }}
            className={ 'textField' }
          />
        </div>
        <div className={ 'flexDisplay' }>
          <TextField
            hintText={'email'}
            value={this.state.email}
            onChange={(event, value)=> {
              this.setState({email: value})
            }}
            className={ 'textField' }
          />
          <TextField
            hintText={'Phone Number'}
            value={this.state.phone}
            onChange={(event, value)=> {
              this.setState({phone: value})
            }}
            className={ 'textField' }
          />
        </div>
        <div className={ 'section-title-cont' }>
          <div className={ 'sectionTitle' }>Address</div>
        </div>
        <div className={ 'flexDisplay' }>
          <TextField
            hintText={'Street Address'}
            value={this.state.address}
            onChange={(event, value)=> {
              this.setState({address: value})
            }}
            className={ 'textField' }
          />
          <TextField
            hintText={'Apt., suite, floor, etc.'}
            value={this.state.secondaryAddress}
            onChange={(event, value)=> {
              this.setState({secondaryAddress: value})
            }}
            className={ 'textField' }
          />
        </div>
        <div className={ 'flexDisplay' }>
          <TextField
            hintText={'City'}
            value={this.state.city}
            onChange={(event, value)=> {
              this.setState({city: value})
            }}
            className={ 'textField' }
          />
          <TextField
            hintText={'Country'}
            value={this.state.country}
            onChange={(event, value)=> {
              this.setState({country: value})
            }}
            className={ 'textField' }
          />
          <TextField
            hintText={'Postal Code'}
            value={this.state.postal}
            onChange={(event, value)=> {
              this.setState({postal: value})
            }}
            className={ 'textField' }
          />
        </div>
        <TextField
          hintText={
            'Delivery instructions, e.g. check with doorman or call on arrival.'
           }
          rows={2}
          rowsMax={4}
          fullWidth
          value={this.state.deliveryInstructions}
          onChange={(event, value)=> {
            this.setState({deliveryInstructions: value})
          }}
        />
        <br />
        <br />
        <Checkbox
          label={'Save Address'}
          checked={this.state.saveAddress}
          style={{marginBottom: 16}}
          onCheck={(event, value)=> {
            this.setState({saveAddress: value})
          }}
        />
        <br />
        <Tabs
          onChange={(event, value)=> {
            this.setState({addressType: value})
          }}
          value={this.state.addressType}
        >
          <Tab label={'Home'} value={'home'} />
          <Tab label={'Work'} value={'work'} />
          <Tab label={'Other'} value={'other'} />
        </Tabs>
        <br />
        <RaisedButton
          fullWidth
          primary
          label={'Continue To Payment Method'}
          onClick={() => {console.log('success')}}
        />
      </div>
    )
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

export default connect(null, null)(NewAddress)
