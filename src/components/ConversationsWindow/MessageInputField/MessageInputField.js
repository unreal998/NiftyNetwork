import React from 'react';

import './MessageInputField.scss';
import photoProfile from '../../../icons/photo-min.png';

const MessageInputField = () => (
    <div className="messageInputField">
        <img src={photoProfile} alt="photoProfile"/>
        <a></a>
        <input type="text"/>
        <a></a>
    </div>
);

export default MessageInputField;
