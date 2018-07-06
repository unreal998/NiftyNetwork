import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

// import App from './components/App';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
// import App from './components/App';
import Notifications from './components/Notifications/Notifications';
import Messages from './components/MessagesWindow/MessagesWindow';
import UserPage from './components/UserPage/UserPage';
import AuthPage from './components/AuthPage/AuthPage';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
  applyMiddleware(sagaMiddleware),
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
        <Route path="/messages" component={Messages}/>
        <Route path='/' render = {() => auth ? <Redirect to= "/home"/> : <Redirect to= "/auth"/>}/>
      </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
