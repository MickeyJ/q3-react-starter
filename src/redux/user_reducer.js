import {
  LOG_IN,
  SIGN_UP,
  IS_AUTHED,
} from './actions'

const INITIAL_STATE = { cred: {}, token: '', error: {} };

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case SIGN_UP:
      return {...state,
        cred: action.payload.data.user,
        token: action.payload.data.token
      };
    case LOG_IN:
      return { ...state,
        cred: action.payload.data.user,
        token: action.payload.data.token
      };
    case IS_AUTHED:
      return { ...state,
        ...state.token,
        cred: action.payload.data.user,
        error: action.payload.data.message
      };
    default:
      return state
  }
}
