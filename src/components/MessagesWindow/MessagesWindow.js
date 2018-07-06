import React from 'react';
import PropTypes from 'prop-types';

import UsersAside from '../../containers/UsersAside';
import ConversationsWindow from '../ConversationsWindow/ConversationsWindow';
import './MessagesWindow.scss';
import { databaseRef } from '../../firebase/firebase';

class MessagesWindow extends React.Component {
  componentDidMount() {
    const messages = databaseRef.child('messages');
    messages.on('value', (snap) => {
      this.props.fetchMessages(snap.val());
    });
    const users = databaseRef.child('users');
    users.on('value', (snap) => {
      this.props.fetchUsers(snap.val());
    });
  }
  /* eslint-disable */
  render() {
    /* eslint-enabled */
    return (
      <div className="messagesWindow">
        <UsersAside/>
        <ConversationsWindow/>
      </div>
    );
  }
}

MessagesWindow.propTypes = {
  fetchMessages: PropTypes.func,
  fetchUsers: PropTypes.func,
};

export default MessagesWindow;
