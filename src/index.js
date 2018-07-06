import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createLogger } from 'redux-logger';
import App from './components/App';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <Route path='/:filter?' component={App}/>
      </Router>
    </Provider>,
    document.getElementById('root'),
);
