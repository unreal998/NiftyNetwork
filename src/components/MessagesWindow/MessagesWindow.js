import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Siders from '../Sider/Sider';
import Header from '../Header/Header';
import UsersAside from '../../containers/UsersAside';
import ConversationsWindow from '../ConversationsWindow/ConversationsWindow';
import './MessagesWindow.scss';

class MessagesWindow extends Component {
  render() {
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
};

const mapStateToProps = state => ({
  colorBody: state.colorReducer.colorBody,
});

export default connect(mapStateToProps)(MessagesWindow);
