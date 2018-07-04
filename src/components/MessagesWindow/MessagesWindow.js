import React from 'react';

import UsersAside from '../UsersAside/UsersAside';
import CorrespondenceWindow from '../CorrespondenceWindow/CorrespondenceWindow';
import './MessagesWindow.scss';

const MessagesWindow = () => (
    <div className="messagesWindow">
        <UsersAside/>
        <CorrespondenceWindow/>
    </div>
);

export default MessagesWindow;
