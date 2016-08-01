import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReduxPromise from 'redux-promise';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBox from './SearchBox';
import RecipeList from './RecipeList';
import RecipeListEntry from './RecipeListEntry';
import { setSearch } from '../actions/index';
import { setRecipe } from '../actions/index';
import { fetchRecipes } from '../actions/index';



class SavedRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  componentWillMount() {
    //check for user signed in
    if (user){
      //XXXXXXXXXXXX this is probably not right!!! XXXXXXXXXXXXXXXXXX
      var userId = user.username;
      //pass in userId as query
      return axios.post('/api/saved', username)
        .then(function(recipes){
          console.log("User Axios Recipes response on front end ", recipes);
          //here are the users saved recipes
        })
        .catch(function(err){
          console.log("Error getting saved recipes", err);
        })
    }

  }

  onRecipeClick(recipe) {
    var context = this;
    console.log('onRecipeClick Id: ', recipe.id);
    var envelope = {
      id: recipe.id
    }
    return axios.post('/api/getInstructions', envelope)
    .then(function(instructionData) {
      axios.post('/api/getSummary', envelope)
        .then(function(summaryData) {
        var summary = summaryData.data;
        var instructions = instructionData.data[0].steps;
          context.props.setRecipe({
            summary: summary,
            instructions: instructions
          });
        browserHistory.push('/SelectedRecipe');
        // window.location.hash = '/SelectedRecipe';
        })
        .catch(function(err) {
        console.log("Some error in recipeClick axios summary", err)
        })
    })
    .catch(function(err) {
      console.log("Some error in recipeClick axios instructions", err)
    })
  }

  render() {

    console.log("Yo I'm rendering", this.props.recipes);
    if (this.props.recipes){
      return (
        <div>
          {this.props.recipes.map((recipe, index) =>
            <RecipeListEntry
            onRecipeClick={ () => this.onRecipeClick(recipe) }
            key={index}
            recipe={recipe}
            />
          )}
        </div>
      )
    }
    if (this.props.summaryInstructions){
      return (
        <div>{JSON.stringify(this.props.instructions)}
           <SelectedRecipe
            key={index}
            step={step}
          />
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }

}


function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    searchQuery: state.searchQuery,
    summaryInstructions: state.summaryInstructions,
    instructions: state.instructions,
    advSearch: state.advSearch
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setSearch: setSearch, setRecipe: setRecipe, fetchRecipes: fetchRecipes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipes);

