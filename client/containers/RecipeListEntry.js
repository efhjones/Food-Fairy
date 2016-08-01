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
<<<<<<< e0386a8bf6e4c95451091fc6d8b8c22362a17f68
=======

    this.state = {
      summary: 'testSummary blah blah'
    }

    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  // componentWillMount(){
  //   var context = this;
  //   this.getSumarries(context.props.recipes.id)
  //     .then(function(summary){
  //      context.setState = ({summary: summary});
  //     });
  // }

  // getSummaries(id){
  //   //es6 itll just set id:id
  //   var envelope = {
  //     id
  //   }
  //   return axios.post('/api/summary', envelope)
  //   .then(function(req) {
  //     return req.data;
  //   })
  //   .catch(function(err) {
  //     console.log("no summaries here ", err)
  //   })
  // }

  onRecipeClick() {
    //Make an a tag instead?
    this.props.setRecipe(id);
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




