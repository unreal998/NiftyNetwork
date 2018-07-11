import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import UserPage from './UserPage/UserPage';
import AuthPage from '../containers/AuthPage';
import Messages from '../containers/MessagesWindow';
import SignUpPage from '../containers/SignUpPage';
import Notifications from './Notifications/Notifications';

const Root = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"
             render={
               () => Object.keys(props.currentUser).length === 0 ? <Redirect to='/auth'/> : <Redirect to={`/home/${props.currentUser.uid}`} />
             }/>
      <Route path='/auth' component={AuthPage}/>
      <Route path={`/signup/${props.currentUser.uid}`} component={SignUpPage}/>
      <Route path={`/notifycation/${props.currentUser.uid}`} component={Notifications}/>
      <Route path={`/messages/${props.currentUser.uid}`} component={Messages}/>
      <Route path={`/home/${props.currentUser.uid}`} component={UserPage}/>
    </Switch>
  </BrowserRouter>
);

Root.propTypes = {
  currentUser: PropTypes.object,
};

export default Root;
