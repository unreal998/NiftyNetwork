import React, { Fragment, Component } from 'react';


import Header from './Header/Header';
import Sider from './Sider/Sider';
import AuthPage from './AuthPage/AuthPage';

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

  render() {
    console.log(this);
    return (
      <Fragment>
          <Sider/>
          <div className="page" >
          {this.state.auth ? <div><Header/><Links/></div> : <AuthPage/>}
          </div>
          <Sider/>
      </Fragment>
    );
  }
}

export default App;
