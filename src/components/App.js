import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';
import Header from './Header/Header';
import Sider from './Sider/Sider';
import UserPage from './UserPage/UserPage';

import FakeHome from './FakeHome';
import FakeMessages from './FakeMessages';
import FakeNotify from './FakeNotify';

const App = (props) => {
  const { filter } = props.match.params;
  let RenderComponent;

  switch (filter) {
    case 'home':
      RenderComponent = FakeHome;
      break;
    case 'messages':
      RenderComponent = FakeMessages;
      break;
    case 'notifycation':
      RenderComponent = FakeNotify;
      break;
    default:
      RenderComponent = FakeHome;
  }

  return (
    <Fragment>
        <Sider/>
        <div className="page">
            <Header/>
            <UserPage/>
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
