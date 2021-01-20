import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { logger } from 'redux-logger'
import { reducer } from './reducers/reducer'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

