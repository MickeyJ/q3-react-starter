import axios from 'axios'
import JWT from '../helpers/jwt_helper'

export const IS_AUTHED = 'IS_AUTHED';
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';

export const GET_USER_PHRASES = 'GET_USER_PHRASES';
export const ADD_PHRASE = 'ADD_PHRASE';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_PHRASE_TO_CATEGORY = 'ADD_PHRASE_TO_CATEGORY';

const API = 'http://localhost:3000/api/v1';

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

export function getUserCategories(id){
  const request = axios.get(`${API}/categories/${id}`);
  return{
    type: GET_USER_PHRASES,
    payload: request
  }
}

export function addPhrase(phrase){
  console.log('from actions', phrase);
  const request = axios({
    url: `${API}/phrases`,
    method: 'POST',
    headers: {'Authorization': `Bearer ${JWT.fetch()}`},
    data: {phrase}
  });
  return{
    type: ADD_PHRASE,
    payload: request
  }
}

export function addCategory(data){
  const request = axios.post(`${API}/categories/`, data);
  return{
    type: ADD_CATEGORY,
    payload: request
  }
}

export function addPhraseToCategory(id, data){
  const request = axios.post(`${API}/categories/${id}`, data);
  return{
    type: ADD_PHRASE_TO_CATEGORY,
    payload: request
  }
}

