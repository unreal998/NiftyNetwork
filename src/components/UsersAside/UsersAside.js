import React from 'react';
import PropTypes from 'prop-types';

import './UsersAside.scss';
import UserContactAside from './UserContactAside/UserContactAside';
/* eslint-disable */
const UsersAside = props => (
    <div className="userAside">
      {
        (function () {
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
/* eslint-enabled */

// TODO: Добавить правильную валидацию типа
UsersAside.propTypes = {
  users: PropTypes.Object,
};
export default UsersAside;
