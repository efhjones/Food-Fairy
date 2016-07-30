import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect} from 'react-router';
import BodyPage from './components/Body';
import RecipeList from './containers/RecipeList';
import SearchBox from './containers/SearchBox';
import SelectedRecipe from './pages/Recipes/SelectedRecipe';

export default (
  <Route path="/" component={BodyPage}>
    <Route path="results" component={RecipeList} />
    <Route path="SelectedRecipe" component={SelectedRecipe} />
  </Route>
)