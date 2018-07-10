import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Siders from '../Sider/Sider';
import Header from '../Header/Header';
import UsersAside from '../../containers/UsersAside';
import ConversationsWindow from '../ConversationsWindow/ConversationsWindow';
import './MessagesWindow.scss';

class MessagesWindow extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (Object.keys(this.props.currentUser).length === 0) {
      return <Redirect to='/auth'/>;
    }

    return (
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
  }
}

MessagesWindow.propTypes = {
  fetchMessages: PropTypes.func,
  fetchUsers: PropTypes.func,
  currentUser: PropTypes.object,
};

export default MessagesWindow;
