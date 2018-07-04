import React, { Component } from 'react';

import UserInfo from './components/UserInfo/UserInfo';
import NewPosts from './components/NewPosts/NewPosts';

import './UserPage.scss';

class UserPage extends Component {
  render() {
    console.log(this);
    return (
        <div className="content">
          <div className="infoBlock">
              <UserInfo/>
              <NewPosts/>
          </div>
        </div>
    );
  }
}

export default UserPage;
