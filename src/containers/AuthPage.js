import { connect } from 'react-redux';

import AuthPage from '../components/AuthPage/AuthPage';
import { signInUser } from '../actions/signInUser';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  signInUser: (
    email,
    password,
    name,
    surnmae,
  ) => dispatch(signInUser(email, password, name, surnmae)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
