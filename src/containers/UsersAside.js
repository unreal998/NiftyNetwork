import {connect} from 'react-redux';

import UsersAside from '../components/UsersAside/UsersAside';

const mapStateToProps = state => ({
  users: state.users,
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UsersAside);
