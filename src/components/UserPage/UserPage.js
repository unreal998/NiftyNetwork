import React, { Component } from 'react';

import UserInfo from './UserInfo/UserInfo';
import NewPosts from './NewPosts/NewPosts';
import AddNiftPanel from './AddNiftPanel/AddNiftPanel';
import Nift from './Nift/Nift';
import UserNifters from './UserNifters/UserNifters';

import photoMin from '../../icons/photo-min.png';
import photo from '../../icons/photo.png';
import './UserPage.scss';

class UserPage extends Component {
  render() {
    console.log(this);
    return (
        <div className="content">
          <div className="infoBlock">
              <UserInfo userName="Maks" userAge="19" userGender="male" userPhone="88005553535" />
              <NewPosts/>
          </div>
          <main className="userNifts">
            <AddNiftPanel/>
            <div className="niftsList">
             <Nift icon={photoMin} date={'21.07.18'} text ={'loremafssssssssssssssssss lorem fbhah dadasd as dasd as ddsa jkajs dddddddd af  af a fsa  ' } />
             <Nift icon={photoMin} date={'21.07.18'} imgs={[photo]} />
            </div>
            <div/>
          </main>
            <aside className="sideBar">
              <UserNifters/>
            </aside>
        </div>
    );
  }
}

export default UserPage;
