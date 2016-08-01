import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Nav from './Nav';
import SearchBox from '../containers/SearchBox';
import RecipeList from '../containers/RecipeList';
import RecipeListEntry from '../containers/RecipeListEntry';


export default class Body extends React.Component {

  componentWillReceiveProps(){
  }
  render () {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}