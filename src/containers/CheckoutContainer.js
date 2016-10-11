import { connect } from 'react-redux';
import Checkout from '../components/Checkout';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cart: state.cart

  }
}

export default connect(mapStateToProps, null)(Checkout);
