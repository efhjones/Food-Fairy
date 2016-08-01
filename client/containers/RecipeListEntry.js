import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RecipeList from './RecipeList';

// RecipeEntry receives each recipe from the RecipeList (array) component and renders a small (image + description + likes) or a large card (instructions)
export default class RecipeListEntry extends React.Component {
  //props: recipe - the recipe data to be shown; taken from the API
  constructor(props){
    super(props);
  }

  render(){
    console.log('Recipe list entry', this.props.recipe);
    return (
      <div
        className='recipe-card'
        onClick={this.props.onRecipeClick}>
        <img className='recipeImg' src={this.props.recipe.image} />
        <div>{this.props.recipe.title}</div>
      </div>
    )
  }
}




