import React from 'react';

import './UsersAside.scss';
import UserContactAside from './UserContactAside/UserContactAside';

const UsersAside = (props) => (
    <div className="userAside">
      {
        (function () {
          const users = Object.values(props.users);

          return users.map(user => (
            <UserContactAside key={user.id} name={user.name} surname={user.surname} icon={user.icon} anmountMessages={0}/>
          ));
        })()
      }
    </div>
);

export default UsersAside;
