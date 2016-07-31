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
import _ from 'underscore';

class SelectedRecipe extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log("SelectedRecipe props", this.props);
  }

  componentWillReceiveProps(){
    console.log("SelectedRecipe got new props", this.props);
  }

  render(){
    console.log("Yo selected recipe props in da house", this.props)
    if (!this.props.summaryInstructions){
      return (
        <div>Loading...</div>
      )
    }
    return(
      <div>{JSON.stringify(this.step)}
        <div className='recipe-card'>
          <div dangerouslySetInnerHTML={{__html: this.props.summaryInstructions.summary.summary}} />
          <div>
            <ol>
              {/* loops through all the recipe steps and adds them to an ordered list */}
              {this.props.summaryInstructions.instructions.map((instruction)=>{
                return (
                  <li>{instruction.step}</li>
                )
              }
              )}
            </ol>
          </div>
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
  return bindActionCreators({setSearch: setSearch, setRecipe: setRecipe, fetchRecipes: fetchRecipes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedRecipe);

