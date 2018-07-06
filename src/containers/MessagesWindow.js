import { connect } from 'react-redux';

import MessagesWindow from '../components/MessagesWindow/MessagesWindow';

import { successFetchUsers } from '../actions/fetchUsers';
import { successFetchMessages } from '../actions/fetchMessages';

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(successFetchUsers(users)),
  fetchMessages: messages => dispatch(successFetchMessages(messages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesWindow);
