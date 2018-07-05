import React, { Component } from 'react';

import UserInfo from './UserInfo/UserInfo';
import NewPosts from './NewPosts/NewPosts';
import AddNiftPanel from './AddNiftPanel/AddNiftPanel';

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
          <main className="userNifts">
            <AddNiftPanel/>
            <div/>
          </main>
        </div>
    );
  }
}

export default UserPage;
