import { connect } from 'react-redux';

import MessagesWindow from '../components/MessagesWindow/MessagesWindow';
import { fetchUsers } from '../actions/fetchUsers';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesWindow);
