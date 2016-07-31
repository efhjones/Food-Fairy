import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBox from '../../containers/SearchBox';
import RecipeList from '../../containers/RecipeList';
import RecipeListEntry from '../../containers/RecipeListEntry';
import { setSearch } from '../../actions/index';
import { setRecipe } from '../../actions/index';
import { fetchRecipes } from '../../actions/index';
import ReduxPromise from 'redux-promise';

class SelectedRecipe extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log("SelectedRecipe props", this.props);
  }

  //function to save the recipe to the mongo database
  // saveRecipe(){
  //   $.ajax({
  //     url: '/api/recipes',
  //     type: 'POST',
  //     data: { title: this.props.recipe.title,
  //             image: this.props.recipe.image,
  //             summary: this.state.summary,
  //             steps: JSON.stringify(this.state.steps),
  //             likes: this.props.recipe.likes },
  //     success: function(data) {
  //       console.log('success', data);
  //     }.bind(this),
  //     error: function() {
  //       console.log('failure')
  //     }
  //   });
  // }

  render(){
    console.log("Yo selected recipe props in da house", this.props)
    if (!this.props.summaryInstructions){
      return (
        <div>Loading...</div>
      )
    }
    console.log(this.props)
    return(
      <div>
      <div className='recipe-card'>
        {this.props.summaryInstructions.summary.summary}
      </div>
      <div>
        {this.props.summaryInstructions.instructions.toString()}
      </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    searchQuery: state.searchQuery,
    summaryInstructions: state.summaryInstructions
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setSearch:setSearch, setRecipe: setRecipe, fetchRecipes: fetchRecipes}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedRecipe);

