import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Siders from '../Sider/Sider';
import Header from '../Header/Header';
import UsersAside from '../../containers/UsersAside';
import ConversationsWindow from '../ConversationsWindow/ConversationsWindow';
import './MessagesWindow.scss';

const MessagesWindow = () => (
  <Fragment>
    <Siders/>
      <div className= "contentPage">
        <Header/>
          <div className="messagesWindow">
            <UsersAside/>
            <ConversationsWindow/>
          </div>
        </div>
      <Siders/>
    </Fragment>
);

MessagesWindow.propTypes = {
  fetchMessages: PropTypes.func,
  fetchUsers: PropTypes.func,
};

export default MessagesWindow;
