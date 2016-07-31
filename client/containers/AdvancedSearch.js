import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RecipeList from './RecipeList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearch } from '../actions/index';
import { setRecipe } from '../actions/index';
import { fetchRecipes } from '../actions/index';
import { setAdvSearch } from '../actions/index';


// SearchBox is rendered on SearchPage and receives searchAPI and callback as props
export default class AdvancedSearch extends React.Component {
  //props: searchAPI - a function that makes a search request to the spoontacular API
  //       callback - from the searchpage - it's given access to the received recipes
  //                  and allows the searchpage to have access to them in turn
  constructor(props){
    super(props);
    this.state = {
      includeIngredients: '',
      intolerances: '',
      diet: '',
      cuisine: '',
      excludeIngredients: '',
      maxCalories: '800'


    }
    this.props.setAdvSearch = this.props.setAdvSearch.bind(this);
  }

  search(params) {
    this.props.setAdvSearch(params);
    window.location.hash = '#/results';
    //this.setSearch(this.state.value);
  }


  render(){
    return(
      <div className="center-block searchbox">
        {/* event set the state of the SearchBox to the data input */}

        <div className= "ingredientsBox" >
          <h1>Ingredients</h1>
          <h5>I have these ingredients</h5>
          <input className="ingredients" type="text" placeholder="ingredients" onChange={(event) => {this.setState({includeIngredients: event.target.value});
          }} value={this.state.includeIngredients}/>
          <br/>
          <h5>Cuisine Type</h5>
          <input className="cuisine" type="text" placeholder="cuisine type ex: Italian, Chinese" onChange={(event) => {this.setState({cuisine: event.target.value});
          }} value={this.state.cuisine}/>
        </div>
        <div className="restrictionsBox">
          <h1>Restrictions</h1>
          <h5>Diet</h5>
          <input className="diet" type="text" placeholder="dietary restrictions: vegan, vegetarian, paleo, etc." onChange={(event) => {this.setState({diet: event.target.value});
          }} value={this.state.diet}/>
          <h5>I don't have these ingredients</h5>
          <input className="exclude" type="text" placeholder="I don't have this stuff" onChange={(event) => {this.setState({excludeIngredients: event.target.value});
          }} value={this.state.excludeIngredients}/>
          <h5>Allergies</h5>
           <input className="intolerances" type="text" placeholder="I don't have this stuff" onChange={(event) => {this.setState({intolerances: event.target.value});
          }} value={this.state.intolerances}/>
        </div>
        <div className="nutritionBox">
          <h1>Nutrition Requirements</h1>
          <h5>Maximum Calories</h5>
          <input className="maxCalories" type="text" placeholder="per serving" onChange={(event) => {this.setState({maxCalories: event.target.value});
          }} value={this.state.maxCalories}/>
        </div>
        <br/>
        <div className="col-xs-12">
          <button className="searchsubmit" onClick={() => {this.search(this.state)}}>Search</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    searchQuery: state.searchQuery,
    advSearch: state.advSearch
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setAdvSearch:setAdvSearch}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearch);


