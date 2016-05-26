import { combineReducers } from 'redux'

import UserReducer from './user_reducer'
import PhraseReducer from './phrase_reducer'

export default combineReducers({
  user: UserReducer,
  phrases: PhraseReducer
});
