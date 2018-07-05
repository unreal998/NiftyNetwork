import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';
import Header from './Header/Header';
import Sider from './Sider/Sider';
import Notifications from './Notifications/Notifications';
import UserPage from './UserPage/UserPage';

import FakeMessages from './FakeMessages';


const App = (props) => {
  const { filter } = props.match.params;
  let RenderComponent;

  switch (filter) {
    case 'home':
      RenderComponent = UserPage;
      break;
    case 'messages':
      RenderComponent = FakeMessages;
      break;
    case 'notifycation':
      RenderComponent = Notifications;
      break;
    default:
      RenderComponent = UserPage;
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
