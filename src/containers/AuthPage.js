import { connect } from 'react-redux';

import AuthPage from '../components/AuthPage/AuthPage';
import { signInUser } from '../actions/signInUser';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  signInUser: (email, password) => dispatch(signInUser(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
