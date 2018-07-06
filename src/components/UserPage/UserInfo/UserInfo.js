import React from 'react';
import PropTypes from 'prop-types';
import photo from '../../../icons/photo.png';
import './UserInfo.scss';


function UserInfo(prop) {
  return (<div className="userInfo">
      <div className="userMainIcon">
        <img src={photo} alt="" />
      </div>
      <div className="userPersonalInfo">
          <span className="userName userPesonalInfoItem">Name: {prop.userName}</span>
          <span className="userAge userPesonalInfoItem">Age: {prop.userAge}</span>
          <span className="userAge userPesonalInfoItem">Gender: {prop.userGender}</span>
          <span className="userPhoneNumber userPesonalInfoItem">Phone: {prop.userPhone}</span>
          <button className="toggler">🠷 view more 🠷</button>
      </div>
  </div>);
}

UserInfo.propTypes = {
  userName: PropTypes.string,
  userAge: PropTypes.number,
  userGender: PropTypes.string,
  userPhone: PropTypes.number,
};

export default UserInfo;
