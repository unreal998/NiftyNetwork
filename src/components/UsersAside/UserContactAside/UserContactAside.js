import React from 'react';
import PropTypes from 'prop-types';

import './UserContactAside.scss';
/* eslint-disable */
const UserContactAside = props => (
    <div className="userContactAside">
    
        <img src={props.icon} alt="photoIcon"/>
        <span>{props.name} {props.surname}</span>
        <span>{props.amountMessages}</span>
    </div>
);
/* eslint-enabled */

UserContactAside.propTypes = {
  colMessages: PropTypes.number,
};

export default UserContactAside;
