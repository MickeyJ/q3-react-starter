import {
  GET_USER_PHRASES,
  ADD_PHRASE,
  ADD_CATEGORY,
  ADD_PHRASE_TO_CATEGORY,
} from './actions'

const INITIAL_STATE = { categories: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    
    case GET_USER_PHRASES:
      return {...state,
        categories: action.payload.data.categoriesBody
      };

    case ADD_PHRASE:
      return {...state,
        categories: [ action.payload.data.phrase[0], ...state.categories ]
      };

    case ADD_CATEGORY:
      return {...state,
        categories: action.payload.data.cats
      };

    case ADD_PHRASE_TO_CATEGORY:
      return {...state,
        categories: action.payload.data.cats
      };
    
    default:
      return state
  }
}
