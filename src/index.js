import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import rootSaga from './redux/sagas';
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./App";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      sagaMiddleware,
    )));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
