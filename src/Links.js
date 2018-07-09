import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Notifications from './components/Notifications/Notifications';
import UserPage from './components/UserPage/UserPage';

export default function Links() {
  return (
        <Switch>
            <Route path="/home" component={UserPage}/>
            <Route path="/notifycation" component={Notifications}/>
        </Switch>
  );
}
