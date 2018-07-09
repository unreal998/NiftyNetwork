import React from 'react';
import PropTypes from 'prop-types';

import './UsersAside.scss';
import UserContactAside from './UserContactAside/UserContactAside';

const UsersAside = props => (
    <div className="userAside">
      {
        (function showUsers() {
          const users = Object.values(props.users);

          return users.map(user => (
            <UserContactAside
              key={user.id}
              name={user.name}
              surname={user.surname}
              icon={user.icon}
              anmountMessages={0}/>
          ));
        }())
      }
    </div>
);

UsersAside.propTypes = {
  users: PropTypes.object,
};

export default UsersAside;
