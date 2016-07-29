import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import reducers from '';
import routes from '';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>

  , document.getElementById('app'));




