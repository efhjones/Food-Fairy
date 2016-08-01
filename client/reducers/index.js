import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipes';
import SelectedRecipeReducer from './reducer_selectedRecipe';
import SearchQueryReducer from './reducer_search';
import AdvSearchReducer from './reducer_advSearch';

const rootReducer = combineReducers({
  summaryInstructions : SelectedRecipeReducer,
  searchQuery : SearchQueryReducer,
  recipes : RecipeReducer,
  advSearch: AdvSearchReducer
});

export default rootReducer;