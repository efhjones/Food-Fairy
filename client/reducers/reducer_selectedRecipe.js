import { SET_RECIPE } from '../actions/index';


export default function(state=null, action) {
  console.log("In SetRecipe Reducer, action.payload: ", action.payload);
  switch(action.type){
    case SET_RECIPE:
      return action.payload;
  }
  return state;

}