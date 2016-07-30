export const SET_SEARCH = 'SET_SEARCH';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SET_RECIPE = 'SET_RECIPE';

export function setSearch(search) {
  console.log('setSearch called with: ', search);
  return {
    type: SET_SEARCH,
    payload: search
  }
}

export function fetchRecipes(recipes) {
  console.log("fetch recipes", recipes);
  return {
    type: FETCH_RECIPES,
    payload: recipes
  }
}

export function setRecipe(recipe) {
  return {
    type: SET_RECIPE,
    payload: recipes
  }
}

