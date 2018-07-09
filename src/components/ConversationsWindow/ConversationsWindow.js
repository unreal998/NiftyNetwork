import React from 'react';

import './ConversationsWindow.scss';
import HeadCorrespondWindow from './HeadCorrespondWindow/HeadCorrespondWindow';
import ChatWindow from './ChatWindow/ChatWindow';
import MessageInputField from './MessageInputField/MessageInputField';

const ConversationsWindow = () => (
      <div className="correspondWindow">
        <HeadCorrespondWindow/>
        <ChatWindow/>
        <MessageInputField/>
      </div>
);

export default ConversationsWindow;
