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
    this.getRecipes(context.props.searchQuery)
      .then(function(recipes){
        context.props.fetchRecipes(recipes);
      });
  }

  componentWillReceiveProps () {
    console.log("Recipes got new props", this.props);
  }

  getRecipes(query){
    var envelope = {
      query: query
    }
    return axios.post('/api/recipes', envelope)
    .then(function(recipes) {
      return recipes.data;
    })
    .catch(function(err) {
      console.log("Front side, couldn't find any recipes. Error: ", err)
    })
  }

  onRecipeClick(recipe) {

  }

  render() {
    console.log("Yo I'm rendering", this.props.recipes[0]);
    if (this.props.recipes[0]){
      return (
        <div>IYIYIYIYIY
          {this.props.recipes[0].map((recipe, index) =>
            <RecipeListEntry
            onRecipeClick={() => this.onRecipeClick(recipe) }
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





