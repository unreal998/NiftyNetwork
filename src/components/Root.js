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
               () => Object.keys(props.currentUser).length === 0 ? <Redirect to='/auth'/> : <Redirect to='/home'/>
             }/>
      <Route path="/auth" component={AuthPage}/>
      <Route path="/signup" component={SignUpPage}/>
      <Route path="/notifycation" component={Notifications}/>
      <Route path="/messages" component={Messages}/>
      <Route path="/home" component={UserPage}/>
    </Switch>
  </BrowserRouter>
);

Root.propTypes = {
  currentUser: PropTypes.object,
};

export default Root;
