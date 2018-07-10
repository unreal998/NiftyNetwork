import React, { Component, Fragment } from 'react';

import UserInfo from './UserInfo/UserInfo';
import NewPosts from './NewPosts/NewPosts';
import AddNiftPanel from './AddNiftPanel/AddNiftPanel';
import Nift from './Nift/Nift';
import UserNifters from './UserNifters/UserNifters';
import photoMin from '../../icons/photo-min.png';
import photo from '../../icons/photo.png';
import 'normalize.css';
import './UserPage.scss';
import Siders from '../Sider/Sider';
import Header from '../Header/Header';
/* eslint-disable */
class UserPage extends Component {
  /* eslint-enabled */
  render() {
    return (
      <Fragment>
        <Siders/>
        <div className= "contentPage">
        <Header/>
        <div className="content">
          <div className="infoBlock">
              <UserInfo userName="Maks" userAge={19} userGender="male" userPhone={88005553535} />
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
        </div>
        <Siders/>
        </Fragment>
    );
  }
}

export default UserPage;
