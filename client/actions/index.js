export const SET_SEARCH = 'SET_SEARCH';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SET_RECIPE = 'SET_RECIPE';
export const SET_ADV = 'SET_ADV';


export function setSearch(search) {
  return {
    type: SET_SEARCH,
    payload: search
  }
}

export function fetchRecipes(recipes) {
  return {
    type: FETCH_RECIPES,
    payload: recipes
  }
}

export function setRecipe(object) {
  console.log("setRecipe called", object);
  return {
    type: SET_RECIPE,
    payload: object
  }
}

export function setAdvSearch(advSearch) {
  console.log('advancedSearch', advSearch)
  return {
    type: SET_ADV,
    payload:advSearch
  }
}


