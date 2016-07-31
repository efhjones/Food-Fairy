import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipes';
import SelectedRecipeReducer from './reducer_selectedRecipe';
import SearchQueryReducer from './reducer_search';


const rootReducer = combineReducers({
  summaryInstructions : SelectedRecipeReducer,
  searchQuery : SearchQueryReducer,
  recipes : RecipeReducer
});

export default rootReducer;