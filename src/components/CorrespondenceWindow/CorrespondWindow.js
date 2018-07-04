import React from 'react';

import './CorrespondWindow.scss';
import HeadCorrespondWindow from './HeadCorrespondWindow/HeadCorrespondWindow';
import ChatWindow from './ChatWindow/ChatWindow';
import MessageInputField from './MessageInputField/MessageInputField';

const CorrespondWindow = () => (
    <div className="correspondWindow">
        <HeadCorrespondWindow/>
        <ChatWindow/>
        <MessageInputField/>
    </div>
);

export default CorrespondWindow;
