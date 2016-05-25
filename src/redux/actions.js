import axios from 'axios'
import JWT from '../helpers/jwt_helper'

export const IS_AUTHED = 'IS_AUTHED';
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';

const API = '/api/v1';

export function verifyUser(){
  const request = axios({
    url: `${API}/me`,
    method: 'GET',
    headers: {'Authorization': `Bearer ${JWT.fetch()}`}
  });
  return{
    type: IS_AUTHED,
    payload: request
  }
}

export function userRegister(credentials){
  const request = axios.post(`${API}/signup`, credentials);
  return{
    type: SIGN_UP,
    payload: request
  }
}

export function userLogin(credentials){
  const request = axios.post(`${API}/login`, credentials);
  return{
    type: LOG_IN,
    payload: request
  }
}
