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


class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var context = this;
    console.log("Context", context.props.fetchRecipes);

    console.log("Recipe list props", this.props);
    this.getRecipes(context.props.searchQuery, function(recipes){
      console.log('in componentWillMount, recipes', recipes);
      context.props.fetchRecipes(recipes);
    });
    //incomplete?
  }

  componentWillReceiveProps () {
    console.log("Recipes got new props", this.props);
  }

  getRecipes(query, callback){
    var envelope = {
      query: query
    }
    axios.post('/api/recipes', envelope)
    .then(function(recipes) {
      console.log("received", recipes);
      callback(recipes.data.recipe);
    })
    .catch(function(err) {
      console.log("Front side, couldn't find any recipes. Error: ", err)
    })
  }

  onRecipeClick(recipe) {

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>test</div>
        {this.props.recipes.map((recipe, index) => <RecipeListEntry onRecipeClick={() => this.onRecipeClick(recipe) } key={index} recipe={recipe} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);

