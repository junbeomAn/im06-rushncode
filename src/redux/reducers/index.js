import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import verifyReducer from './verifyReducer';

export default combineReducers({
  questions: questionReducer,
  verify: verifyReducer,
});
