import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import forumReducer from './forumReducer';

export default combineReducers({
  questions: questionReducer,
  forums: forumReducer,
});
