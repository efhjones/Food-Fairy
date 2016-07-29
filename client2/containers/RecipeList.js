import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RecipeListEntry from './RecipeListEntry';



export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);
  }

  onRecipeClick(recipe) {
    this.props.
  }

  render() {

    return (
      <div>
        {this.props.recipes.map((recipe, index) => <RecipeListEntry onRecipeClick={() => this.onRecipeClick(recipe) } key={index} recipe={recipe} />)}
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
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);

