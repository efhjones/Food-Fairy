import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearch } from '../actions/index';

// SearchBox is rendered on SearchPage and receives searchAPI and callback as props
export default class SearchBox extends React.Component {
  //props: searchAPI - a function that makes a search request to the spoontacular API
  //       callback - from the searchpage - it's given access to the received recipes
  //                  and allows the searchpage to have access to them in turn
  constructor(props){
    super(props);
    this.setSearch = this.setSearch.bind(this);
  }

  setSearch(e) {
    //do something with search
  }

  searchAPI() {
      axios.post('/api/recipes', this.state.value)
        .then(function(recipes) {
          callback(recipes);
        })
        .catch(function(err) {
          console.log("couldn't find any recipes. Error: ", err)
        })
  }
  //   this.props.searchAPI({query: this.state.value}, (recipes) => {
  //     // callback gives access to the result of the searchAPI query
  //     this.props.callback(recipes);
  //   });


  render(){
    return(
      <div className="center-block searchbox">
        {/* event set the state of the SearchBox to the data input */}
        <input className="searchboxinput" type="text" />
        {/* searchAPI uses the state value of this component as the query input on the searchAPI method */}
        <button className="searchsubmit" onClick={() => {this.setSearch()}}>Search</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setSearch:setSearch}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);


