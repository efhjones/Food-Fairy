import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Nav from './Nav';
import SearchBox from '../containers/SearchBox'

const App = () => {
  render () {
    return (
        <div>
          <Nav />
          <SearchBox />
        </div>
    )
  }
}

export default App;