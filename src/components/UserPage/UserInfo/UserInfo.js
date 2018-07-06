import React from 'react';
import PropTypes from 'prop-types';
import photo from '../../../icons/photo.png';
import './UserInfo.scss';

function UserInfo(props) {
  return (
      <div className="userInfo">
      <div className="userMainIcon">
        <img src={photo} alt="" />
      </div>
      <div className="userPersonalInfo">
          <span className="userName userPesonalInfoItem">{props.userName}</span>
          <span className="userAge userPesonalInfoItem">{props.userAge}</span>
          <span className="userAge userPesonalInfoItem">{props.userGender}</span>
          <span className="userPhoneNumber userPesonalInfoItem">{props.userPhone}</span>
          <button className="toggler">🠷 view more 🠷</button>
      </div>
  </div>
  );
}

UserInfo.propTypes = {
  userName: PropTypes.string,
  userAge: PropTypes.string,
  userGender: PropTypes.string,
  userPhone: PropTypes.string,
};
export default UserInfo;
