import React from 'react';
import PropTypes from 'prop-types';

import './UserContactAside.scss';

const UserContactAside = props => (
    <div className="userContactAside">
        <img src={props.icon} alt="photoIcon"/>
        <span>{props.name} {props.surname}</span>
        <span>{props.amountMessages}</span>
    </div>
);

UserContactAside.propTypes = {
  colMessages: PropTypes.number,
};

export default UserContactAside;
