import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import { createLogger } from 'redux-logger';
import * as firebase from 'firebase';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
// import App from './components/App';
import Notifications from './components/Notifications/Notifications';
import FakeMessages from './components/FakeMessages';
import UserPage from './components/UserPage/UserPage';
import AuthPage from './components/AuthPage/AuthPage';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDy8lYEmE4Rs9A66Hf5mWc6GujfB9Mo1SY',
  authDomain: 'react-redux-firebise.firebaseapp.com',
  databaseURL: 'https://react-redux-firebise.firebaseio.com',
  projectId: 'react-redux-firebise',
  storageBucket: 'react-redux-firebise.appspot.com',
  messagingSenderId: '799988958832',
};
firebase.initializeApp(config);


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);
const auth = true;
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={UserPage}/>
        <Route path="/auth" component={AuthPage}/>
        <Route path="/notifycation" component={Notifications}/>
        <Route path="/messages" component={FakeMessages}/>
        <Route path='/' render = {() => auth ? <Redirect to= "/home"/> : <Redirect to= "/auth"/>}/>
      </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
