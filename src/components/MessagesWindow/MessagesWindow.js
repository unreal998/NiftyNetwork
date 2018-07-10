import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Siders from '../Sider/Sider';
import Header from '../Header/Header';
import UsersAside from '../../containers/UsersAside';
import ConversationsWindow from '../ConversationsWindow/ConversationsWindow';
import './MessagesWindow.scss';

class MessagesWindow extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (Object.keys(this.props.currentUser).length === 0) {
      return <Redirect to='/auth'/>;
    }

    const styleBody = {
      backgroundColor: this.props.colorBody,
    };
    return (
  <Fragment>
    <Siders/>
      <div className= "contentPage" style={styleBody}>
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
  colorBody: PropTypes.string,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => ({
  colorBody: state.colorReducer.colorBody,
});

export default connect(mapStateToProps)(MessagesWindow);
