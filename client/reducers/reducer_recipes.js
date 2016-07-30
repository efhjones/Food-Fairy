import { FETCH_RECIPES } from '../actions/index';


export default function(state=null, action) {
  switch(action.type){
    case FETCH_RECIPES:
      return action.payload;
  }
  return state;

}