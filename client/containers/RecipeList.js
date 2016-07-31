import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBox from './SearchBox';
import RecipeListEntry from './RecipeListEntry';
import { setSearch } from '../actions/index';
import { setRecipe } from '../actions/index';
import { fetchRecipes } from '../actions/index';
import ReduxPromise from 'redux-promise';


class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var context = this;
    console.log("Recipe list props", this.props);
    this.getRecipes(context.props.searchQuery.recipe)
      .then(function(recipes){
        context.props.fetchRecipes(recipes);
      })
      .catch(function(err) {
        throw err;
      });

  }

  componentWillReceiveProps () {
    console.log("Recipes got new props", this.props);
  }

  getRecipes(query){
    var context = this;
    var envelope = {
      query: query
    }
    axios.post('/api/recipes', envelope)
    .then(function(recipes) {
      console.log('')
      return recipes.data;
    })
    .then(function(results){
      context.props.fetchRecipes(results);
    })
    .catch(function(err) {
      console.log("Front side, couldn't find any recipes. Error: ", err)
    })
  }

  onRecipeClick(recipe) {
    var context = this;
    console.log('onRecipeClick Id: ', recipe.id);
    var envelope = {
      id: recipe.id
    }
    axios.post('/api/getInstructions', envelope)
    .then(function(instructionData) {
      axios.post('/api/getSummary', envelope)
        .then(function(summaryData) {
        var summary = summaryData.data;
        var instructions = instructionData.data[0].steps;
          context.props.setRecipe({
            summary: summary,
            instructions: instructions
          });
        window.location.hash = '/SelectedRecipe';
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
    console.log("Yo I'm rendering", this.props);
    if (this.props.recipes[0]){
      return (
        <div>
          {this.props.recipes[0].map((recipe, index) =>
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
    instructions: state.instructions
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setSearch: setSearch, setRecipe: setRecipe, fetchRecipes: fetchRecipes, setInstructions: setInstructions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);




