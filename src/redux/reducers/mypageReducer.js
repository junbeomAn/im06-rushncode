import {
  FETCH_MY_QUESTION_BEGIN,
  FETCH_MY_QUESTION_SUCCESS,
} from '../actions/types';

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  items: [],
  loading: false,
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MY_QUESTION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MY_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
}
