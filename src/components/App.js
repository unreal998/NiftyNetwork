import React, { Fragment, Component } from 'react';


import Header from './Header/Header';
import Sider from './Sider/Sider';

import Notifications from './Notifications/Notifications';
import UserPage from './UserPage/UserPage';
import AuthPage from '../containers/AuthPage';
import SignUpPage from '../containers/SignUpPage';
import MessagesWindow from '../containers/MessagesWindow';

// import Notifications from './Notifications/Notifications'
import Links from '../Links';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: true,
    };
  }

  Auth() {
    this.setState({
      auth: false,
    });
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
