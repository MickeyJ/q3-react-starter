import {
  GET_PHRASES,
  ADD_PHRASE,
} from './actions'

const INITIAL_STATE = { phrases: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    
    case GET_PHRASES:
      return {...state,
        phrases: action.payload.data.phrases
      };
 
    case ADD_PHRASE:
      return {...state
        // categories: action.payload.data.phrase[0], ...state.categories
      };
    
    default:
      return state
  }
}
