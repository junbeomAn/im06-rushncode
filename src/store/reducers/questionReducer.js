import { FETCH_QUESTIONS, FETCH_ONE_QUESTION } from '../actions/types';

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  items: [],
  item: {},
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_ONE_QUESTION:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
