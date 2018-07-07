import { connect } from 'react-redux';

import SignUpPage from '../components/SignUpPage/SignUpPage';
import { createUser } from '../actions/createUser';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  createUser: (
    email,
    password,
    name,
    surnmae,
  ) => dispatch(createUser(email, password, name, surnmae)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
