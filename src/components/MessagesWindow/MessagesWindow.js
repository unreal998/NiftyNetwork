import React from 'react';

import UsersAside from '../UsersAside/UsersAside';
import CorrespondWindow from '../CorrespondenceWindow/CorrespondWindow';
import './MessagesWindow.scss';

const MessagesWindow = () => (
    <div className="messagesWindow">
        <UsersAside/>
        <CorrespondWindow/>
    </div>
);

export default MessagesWindow;
