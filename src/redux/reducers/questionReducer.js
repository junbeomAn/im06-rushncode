import {
  FETCH_QUESTION_LIST_BEGIN,
  FETCH_QUESTION_LIST_SUCCESS,
  FETCH_QUESTION_LIST_FAILURE,
  FETCH_QUESTION_ENTRY_BEGIN,
  FETCH_QUESTION_ENTRY_SUCCESS,
  FETCH_QUESTION_TAG,
} from '../actions/types';

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  items: [],
  loading: false,
  error: null,
  item: {},
  tags: [],
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTION_LIST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_QUESTION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case FETCH_QUESTION_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    case FETCH_QUESTION_ENTRY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUESTION_ENTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload,
      };
    case FETCH_QUESTION_TAG:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
}
