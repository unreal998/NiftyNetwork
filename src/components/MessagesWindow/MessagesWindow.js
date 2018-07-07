import React from 'react';
import PropTypes from 'prop-types';

import UsersAside from '../../containers/UsersAside';
import ConversationsWindow from '../ConversationsWindow/ConversationsWindow';
import './MessagesWindow.scss';

const MessagesWindow = () => (
  <div className="messagesWindow">
    <UsersAside/>
    <ConversationsWindow/>
  </div>
);


MessagesWindow.propTypes = {
  fetchMessages: PropTypes.func,
  fetchUsers: PropTypes.func,
};

export default MessagesWindow;
