import React from 'react';

import './ConversationsWindow.scss';
import HeadCorrespondWindow from './HeadCorrespondWindow/HeadCorrespondWindow';
import ChatWindow from './ChatWindow/ChatWindow';
import MessageInputField from './MessageInputField/MessageInputField';
import databaseRef from '../../firebase/firebase';

class ConversationsWindow extends React.Component {

  render() {
    return (
      <div className="correspondWindow">
        <HeadCorrespondWindow/>
        <ChatWindow/>
        <MessageInputField/>
      </div>
    )
  }
}

export default ConversationsWindow;
