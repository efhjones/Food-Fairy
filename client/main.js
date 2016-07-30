import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import routes from './Router';
import Promise_Handler from './middleware/promise_Handler';


const createStoreWithMiddleware = applyMiddleware(Promise_Handler)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>

  , document.getElementById('app'));




