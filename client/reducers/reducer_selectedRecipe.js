import { SET_RECIPE } from '../actions/index';


export default function(state=null, action) {
  switch(action.type){
    case SET_RECIPE:
      return action.payload;
  }
  return state;

}