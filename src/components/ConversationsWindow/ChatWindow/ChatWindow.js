import React from 'react';

import './ChatWindow.scss';
import Message from './Message/Message';

const ChatWindow = () => (
    <div className="chatWindow">
          <Message ownerMessage='myMessage'/>
          <Message ownerMessage='myMessage'/>
          <Message ownerMessage='someoneMessage'/>
    </div>
);

export default ChatWindow;
