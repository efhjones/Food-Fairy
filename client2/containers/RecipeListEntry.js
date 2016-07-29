import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// RecipeEntry receives each recipe from the RecipeList (array) component and renders a small (image + description + likes) or a large card (instructions)
export default class RecipeList extends React.Component {
  //props: recipe - the recipe data to be shown; taken from the API
  constructor(props){
    super(props);
    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  onRecipeClick() {
    //Make an a tag instead?
    this.props.setRecipe(id);
  }


  render(){
    return (
      <div className="recipe-list-entry"
        onClick={() => this.onRecipeClick(recipe.id)}>
       {this.props.recipe}
      </div>
    )
  }
}

window.RecipeEntry = RecipeEntry
