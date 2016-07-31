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
     axios.post('/api/recipes:' + recipe.id)
    .then(function(recipe) {
      console.log('I got this recipe back: ', recipe);
    })
    .then(function(results){
      console.log("This is in the second then function", results);
    })
    .catch(function(err) {
      console.log("Some error in recipeClick axios", err)
    })
  }

  render() {
    console.log("Yo I'm rendering", this.props.recipes[0]);
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
    searchQuery: state.searchQuery
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setSearch:setSearch, setRecipe: setRecipe, fetchRecipes: fetchRecipes}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);




