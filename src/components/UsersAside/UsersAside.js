import React from 'react';
import PropTypes from 'prop-types';

import './UsersAside.scss';
import UserContactAside from './UserContactAside/UserContactAside';

const UsersAside = props => (
    <div className="userAside">
      {
        props.usersConversations.map((user) => {
          console.log(user);
          const [name, surname] = user.displayName.split(' ');
          console.log(name, surname);
          return <UserContactAside key={user.uid} icon='/icon' name={ name } surname={ surname } amountMessages={ 1 }/>;
        })
      }
    </div>
);

UsersAside.propTypes = {
  usersConversations: PropTypes.array,

};

export default UsersAside;
