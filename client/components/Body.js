import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Nav from './Nav';
import SearchBox from '../containers/SearchBox';

export default class Body extends React.Component {
  render () {
    return (
        <div>
          <Nav />
          <SearchBox />
        </div>
    )
  }
}
