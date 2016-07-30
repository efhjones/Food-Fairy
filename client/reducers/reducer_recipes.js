import { FETCH_RECIPES } from '../actions/index';


export default function(state=[], action) {
  console.log("FetchRecipes Reducer Called, action", action, "action.payload", action.payload);
  switch(action.type){
    case FETCH_RECIPES:
      return [...state, action.payload ];
  }
  return state;
}


