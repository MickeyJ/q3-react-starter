import {
  GET_PHRASES,
  ADD_PHRASE,
  DELETE_PHRASE,
} from './actions'

const INITIAL_STATE = { phrases: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){

    case GET_PHRASES:
      return {...state,
        phrases: action.payload.data.phrases
      };

    case ADD_PHRASE:
      return {...state,
        phrases: [ action.payload.data.phrase[0], ...state.phrases ]
      };

    case DELETE_PHRASE:
      return { ...state,
        phrases: state.phrases.filter(x => (
          x.id !== action.payload.data.id[0]
        ))
      };
    
    default:
      return state
  }
}
