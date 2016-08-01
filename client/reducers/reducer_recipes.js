import { FETCH_RECIPES } from '../actions/index';


export default function(state=[], action) {
  switch(action.type){
    case FETCH_RECIPES:
    console.log("FetchRecipes Reducer Called, action", action, "action.payload", action.payload);
      return action.payload;
  }
  return state;
}


