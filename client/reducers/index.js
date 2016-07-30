import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipes';
import SelectedRecipeReducer from './reducer_selectedRecipe';
import SearchQueryReducer from './reducer_search';


const rootReducer = combineReducers({
  selectedRecipe : SelectedRecipeReducer,
  //TODO: Use this info to implement filter?
  searchQuery : SearchQueryReducer,
  allRecipes : RecipeReducer

});

export default rootReducer;