import { SET_ADV } from '../actions/index';


export default function(state=null, action) {
  switch(action.type){
    case SET_ADV:
      return action.payload;
  }
  return state;

}