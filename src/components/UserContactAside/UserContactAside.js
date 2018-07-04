import React from 'react';

import './UserContactAside.scss';
import photoIcon from '../../icons/photoIcon.png';

const UserContactAside = () => (
    <div className="userContactAside">
        <img src={photoIcon} alt="photoIcon"/>
        <span>First and second name</span>
    </div>
);

export default UserContactAside;
