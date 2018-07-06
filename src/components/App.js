import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';
import Header from './Header/Header';
import Sider from './Sider/Sider';
import Notifications from './Notifications/Notifications';
import UserPage from './UserPage/UserPage';
import AuthPage from '../containers/AuthPage';
import SignUpPage from '../containers/SignUpPage';
import MessagesWindow from '../containers/MessagesWindow';

const App = (props) => {
  const { filter } = props.match.params;
  let RenderComponent;

  switch (filter) {
    case 'home':
      RenderComponent = UserPage;
      break;
    case 'messages':
      RenderComponent = MessagesWindow;
      break;
    case 'notifycation':
      RenderComponent = Notifications;
      break;
    case 'auth':
      RenderComponent = AuthPage;
      break;
    case 'signup':
      RenderComponent = SignUpPage;
      break;
    default:
      RenderComponent = AuthPage;
  }
  return (
    <Fragment>
      <Sider/>
      <div className="page">
        <Header/>
        <RenderComponent/>
      </div>
      <Sider/>
    </Fragment>
  );
};

App.propTypes = {
  match: PropTypes.object,
};

export default App;
