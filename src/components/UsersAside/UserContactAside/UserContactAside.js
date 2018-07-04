import React from 'react';
import PropTypes from 'prop-types';

import './UserContactAside.scss';
import photoIcon from '../../../icons/photoIcon.png';

const UserContactAside = props => (
    <div className="userContactAside">
        <img src={photoIcon} alt="photoIcon"/>
        <span>First and second name</span>
        <span>{props.colMessages}</span>
    </div>
);

UserContactAside.propTypes = {
  colMessages: PropTypes.number,
};

export default UserContactAside;
