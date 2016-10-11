import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'

export default class Checkout extends Component {

	componentWillMount() {
		if (!this.props.user.user) {
			browserHistory.push('/register')
		}
	}

  render() {
  	if (this.props.cart.length > 1) {
  		return (
  			<div>	
		  		<h2> There are no items in your cart. </h2>
		  		<h4><Link to={'/'}>Click Here to get some Grub!</Link></h4>
  			</div>
  		)
  	} else {
    	return (
    	<div>
    	<h2> pay up </h2>
    	</div>
    	)
    }
  }
}

