import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RecipeList from './RecipeList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearch } from '../actions/index';
import { setRecipe } from '../actions/index';
import { fetchRecipes } from '../actions/index';


// SearchBox is rendered on SearchPage and receives searchAPI and callback as props
export default class SearchBox extends React.Component {
  //props: searchAPI - a function that makes a search request to the spoontacular API
  //       callback - from the searchpage - it's given access to the received recipes
  //                  and allows the searchpage to have access to them in turn
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.props.setSearch = this.props.setSearch.bind(this);
  }

  search(param) {
    this.props.setSearch(param);
    window.location.hash = '#/results';
    //this.setSearch(this.state.value);
  }

  componentWillReceiveProps(){
  }


  render(){
    return(
      <div className="center-block searchbox">
        {/* event set the state of the SearchBox to the data input */}
        <input className="searchboxinput" type="text"onChange={(event) => {
            {/* live searching could be implemented easily from here */}
            this.setState({value: event.target.value});
        }} value={this.state.value}/>
        {/* searchAPI uses the state value of this component as the query input on the searchAPI method */}
        <button className="searchsubmit" onClick={() => {this.search(this.state.value)}}>Search</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    searchQuery: state.searchQuery
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setSearch:setSearch, setRecipe: setRecipe, fetchRecipes: fetchRecipes}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);


