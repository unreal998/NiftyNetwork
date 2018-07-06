import React from 'react';

import './HeadCorrespondWindow.scss';
import photoIcon from '../../../icons/userPhoto.png';

const HeadCorrespondWindow = () => (
    <div className="headCorrespondWindow">
        <img src={photoIcon} alt="photo"/>
        <span>User Name Surname</span>
    </div>
);

export default HeadCorrespondWindow;
