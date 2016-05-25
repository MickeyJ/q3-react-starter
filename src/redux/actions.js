import axios from 'axios'
import JWT from '../helpers/jwt_helper'

export const IS_AUTHED = 'IS_AUTHED';
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';

const API = 'http://localhost:3000/api/v1';

export function verifyUser(credentials){
  const request = axios({
    url: `${API}/me`,
    method: 'POST',
    data: credentials,
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
  console.log(
    JWT.fetch()
  );
  const request = axios.post(`${API}/login`, credentials);
  return{
    type: LOG_IN,
    payload: request
  }
}
