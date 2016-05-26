import {
  LOG_IN,
  SIGN_UP,
  IS_AUTHED,
} from './actions'

const INITIAL_STATE = { cred: {}, error: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case SIGN_UP:
      return {...state,
        cred: action.payload.data.user
      };
    case LOG_IN:
      return { ...state,
        cred: action.payload.data.user
      };
    case IS_AUTHED:
      return { ...state,
        cred: action.payload.data.user
      };
    default:
      return state
  }
}
