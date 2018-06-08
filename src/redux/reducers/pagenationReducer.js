import {
  UPDATE_CURRENT_PAGE, 
  UPDATE_START_END_PAGE, 
} from '../actions/types';

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  start: 0, 
  end: 10,
  current: 1,
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CURRENT_PAGE:
      return {
        ...state, 
        current: action.payload,
      };
    case UPDATE_START_END_PAGE:
      return {
        ...state, 
        start: action.payload.start,
        end: action.payload.end,
      };
    default:
      return state;
  }
}
