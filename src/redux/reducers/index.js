import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import forumReducer from './forumReducer';
import verifyReducer from './verifyReducer';

export default combineReducers({
  questions: questionReducer,
  forums: forumReducer,
  verify: verifyReducer,
});
