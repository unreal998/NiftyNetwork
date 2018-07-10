import { connect } from 'react-redux';

import UsersAside from '../components/UsersAside/UsersAside';

/* eslint-disable */
const getConversationsCurrUser = (currUser, users) => {
  const usersArr = Object.values(users);
  console.log(usersArr);
  return usersArr.filter((user) => {
    const idsConversations = Object.keys(currUser.conversations);
    if (idsConversations.includes(user.uid)) return user;
  });
};
/* eslint-enabled */

const mapStateToProps = state => ({
  usersConversations: getConversationsCurrUser(state.currentUser, state.users),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UsersAside);
