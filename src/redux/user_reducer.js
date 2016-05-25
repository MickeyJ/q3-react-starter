<<<<<<< HEAD
import JWT from '../helpers/jwt_helper.js'

import {
=======
import JWT from '../helpers/jwt_helper'

import{
>>>>>>> 3f2dd32febf142b6e4044f246210f745f5e8e609
  LOG_IN,
  SIGN_UP,
} from './actions'

<<<<<<< HEAD
const INITIAL_STATE = { cred: {}, token: ''};

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
=======
const INITIAL_STATE = { cred: {}, token: '' };

export default function(state = INITIAL_STATE, action){

  switch(action.type){
>>>>>>> 3f2dd32febf142b6e4044f246210f745f5e8e609
    case SIGN_UP:
      JWT.save(action.payload.data);
      return {...state,
        cred: action.payload.data.user,
        token: action.payload.data.token
      };
    case LOG_IN:
      JWT.save(action.payload.data);
      return { ...state,
        cred: action.payload.data.user,
        token: action.payload.data.token
      };
    default:
      return state
  }
}
