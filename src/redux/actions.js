import axios from 'axios'

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';

const API = 'http://localhost:3000/api/v1';

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
