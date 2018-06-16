import {
  FETCH_QUESTION_LIST_BEGIN,
  FETCH_QUESTION_LIST_SUCCESS,
  FETCH_QUESTION_LIST_FAILURE,
  FETCH_QUESTION_ENTRY_BEGIN,
  FETCH_QUESTION_ENTRY_SUCCESS,
  FETCH_QUESTION_TAG,
  ON_TITLE_CHANGE,
  ON_REWARD_CHANGE,
  ON_BODY_CHANGE,
  INIT_WRITE_FORM,
  FETCH_MODIFY_QUESTION,
  FETCH_MODIFY_ANSWER,
  FETCH_SORTED_TAG_BEGIN,
  FETCH_SORTED_TAG_SUCCESS,
} from '../actions/types';

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  items: [],
  loading: false,
  error: null,
  item: {},
  tags: [],
  title: '',
  reward: '',
  body: '',
  pickedTag: [],
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
    case ON_TITLE_CHANGE:
      return {
        ...state,
        title: action.payload,
      };
    case ON_REWARD_CHANGE:
      return {
        ...state,
        reward: action.payload,
      };
    case ON_BODY_CHANGE:
      return {
        ...state,
        body: action.payload,
      };
    case INIT_WRITE_FORM:
      return {
        ...state,
        title: '',
        reward: '',
        body: '',
        pickedTag: '',
      };
    case FETCH_MODIFY_QUESTION:
      return {
        ...state,
        title: action.payload.title,
        reward: action.payload.qReward,
        body: action.payload.qBody,
        pickedTag: action.payload.tags,
      };
    case FETCH_MODIFY_ANSWER:
      return {
        ...state,
        body: action.payload.body,
      };
    case FETCH_SORTED_TAG_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SORTED_TAG_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
