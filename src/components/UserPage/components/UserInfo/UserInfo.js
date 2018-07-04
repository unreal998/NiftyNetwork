import React, { Component } from 'react';
import photo from '../../../../icons/photo.png';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    console.log(this);
    return (<div className="userInfo">
      <div className="userMainIcon">
        <img src={photo} alt="" />
      </div>
      <div className="userPersonalInfo">
          <span className="userName userPesonalInfoItem">Name: Dolor</span>
          <span className="userAge userPesonalInfoItem">Age: 19</span>
          <span className="userAge userPesonalInfoItem">Gender: male</span>
          <span className="userPhoneNumber userPesonalInfoItem">Phone: +380 76486344</span>
          <button className="toggler">🠷 view more 🠷</button>
      </div>
  </div>);
  }
}

export default UserInfo;
