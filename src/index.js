import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import Root from './containers/Root';
// import App from './components/App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={ store }>
      <Root/>
    </Provider>,
    document.getElementById('root'),
);
