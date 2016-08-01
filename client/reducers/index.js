import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipes';
import SelectedRecipeReducer from './reducer_selectedRecipe';
import SearchQueryReducer from './reducer_search';
import AdvSearchReducer from './reducer_advSearch';
import { reducer as AuthFormReducer } from 'redux-form';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  summaryInstructions : SelectedRecipeReducer,
  searchQuery : SearchQueryReducer,
  recipes : RecipeReducer,
  advSearch: AdvSearchReducer,
  form: AuthFormReducer,
  auth: AuthReducer
});

export default rootReducer;