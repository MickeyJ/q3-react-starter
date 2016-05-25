import JWT from '../helpers/jwt_helper.js'

import {
  LOG_IN,
  SIGN_UP,
} from './actions'

const INITIAL_STATE = { cred: {} };

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case SIGN_UP:
      JWT.save(action.payload.data);
      return {...state,
        cred: action.payload.data.user
      };
    case LOG_IN:
      JWT.save(action.payload.data);
      return { ...state,
        cred: action.payload.data.user
      };
    default:
      return state
  }
}
