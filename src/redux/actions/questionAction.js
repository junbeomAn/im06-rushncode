import axios from 'axios';
import {
  FETCH_QUESTION_LIST_BEGIN,
  FETCH_QUESTION_LIST_SUCCESS,
  FETCH_QUESTION_LIST_FAILURE,
  FETCH_QUESTION_ENTRY_BEGIN,
  FETCH_QUESTION_ENTRY_SUCCESS,
  FETCH_QUESTION_TAG,
} from './types';

export function fetchQuestionList(page) {
  return (dispatch) => {
    dispatch({ type: FETCH_QUESTION_LIST_BEGIN });
    return axios
      .get(`http://localhost:3001/api/question/getlist/${page}`)
      .then(res => dispatch({ type: FETCH_QUESTION_LIST_SUCCESS, payload: res.data.data }));
  };
}

export function fetchQuestionEntry(id) {
  return (dispatch) => {
    dispatch({ type: FETCH_QUESTION_ENTRY_BEGIN });
    return axios
      .get(`http://localhost:3001/api/question/displayq/${id}`)
      .then(res => dispatch({ type: FETCH_QUESTION_ENTRY_SUCCESS, payload: res.data.data }));
  };
}

export const fetchQuestionTag = () => (dispatch) => {
  axios
    .get('http://localhost:3001/api/question/gettag')
    .then(res => dispatch({ type: FETCH_QUESTION_TAG, payload: res.data.data }));
};

