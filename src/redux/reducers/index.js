import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import verifyReducer from './verifyReducer';
import pagenationReducer from './pagenationReducer';
import mypageReducer from './mypageReducer';

export default combineReducers({
  questions: questionReducer,
  verify: verifyReducer,
  pagenation: pagenationReducer,
  mypage: mypageReducer,
});
