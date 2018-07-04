import React from 'react';

import './UsersAside.scss';
import UserContactAside from './UserContactAside/UserContactAside';

const UsersAside = () => (
    <div className="userAside">
        <UserContactAside colMessages={15}/>
        <UserContactAside colMessages={1}/>
        <UserContactAside colMessages={5}/>
        <UserContactAside colMessages={7}/>
        <UserContactAside colMessages={3}/>
        <UserContactAside colMessages={15}/>
        <UserContactAside colMessages={5}/>
        <UserContactAside colMessages={7}/>
        <UserContactAside colMessages={15}/>
        <UserContactAside colMessages={15}/>
    </div>
);

export default UsersAside;
