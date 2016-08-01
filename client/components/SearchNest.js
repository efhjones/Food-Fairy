import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import SearchBox from '../containers/SearchBox'

export default class SearchNest extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    return (
        <div>
          <SearchBox />
          {this.props.children}
        </div>
    )
  }
}




