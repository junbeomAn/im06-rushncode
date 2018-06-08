import axios from 'axios';
import {
  FETCH_QUESTION_LIST_BEGIN,
  FETCH_QUESTION_LIST_SUCCESS,
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
} from './types';

import { URL_API } from '../../config';

export function fetchQuestionList(page) {
  return (dispatch) => {
    dispatch({ type: FETCH_QUESTION_LIST_BEGIN });
    return axios
      .get(`${URL_API}/api/question/getlist/${page}`)
      .then(res => dispatch({ type: FETCH_QUESTION_LIST_SUCCESS, payload: res.data.data }));
  };
}

export const fetchHomeQuestions = () => (dispatch) => {
  axios
    .get(`${URL_API}/api/question/getlist/1`)
    .then(res => dispatch({ type: FETCH_QUESTION_LIST_SUCCESS, payload: res.data.data }))
    .catch(err => console.log(err));
};

export function getSearchResult(page, keyword) {
  return (dispatch) => {
    dispatch({ type: FETCH_QUESTION_LIST_BEGIN });
    const data = {
      data: keyword,
    };

    return axios
      .post(`${URL_API}/api/sort/search/${page}`, data)
      .then(res => dispatch({ type: FETCH_QUESTION_LIST_SUCCESS, payload: res.data.data }));
  };
}

export function getSortedResult(page, sortby) {
  return (dispatch) => {
    dispatch({ type: FETCH_QUESTION_LIST_BEGIN });

    return axios
      .get(`${URL_API}/api/sort/${sortby}/${page}`)
      .then(res => dispatch({ type: FETCH_QUESTION_LIST_SUCCESS, payload: res.data.data }));
  };
}

export function fetchQuestionEntry(id) {
  return (dispatch) => {
    dispatch({ type: FETCH_QUESTION_ENTRY_BEGIN });
    return axios
      .get(`${URL_API}/api/question/displayq/${id}`)
      .then(res => dispatch({ type: FETCH_QUESTION_ENTRY_SUCCESS, payload: res.data.data }));
  };
}

export const fetchQuestionTag = () => (dispatch) => {
  axios
    .get(`${URL_API}/api/question/gettag`)
    .then(res => dispatch({ type: FETCH_QUESTION_TAG, payload: res.data.data }));
};

export const onTitleChange = e => (dispatch) => {
  dispatch({ type: ON_TITLE_CHANGE, payload: e.target.value });
};

export const onRewardChange = e => (dispatch) => {
  dispatch({ type: ON_REWARD_CHANGE, payload: e.target.value });
};

export const onBodyChange = e => (dispatch) => {
  dispatch({ type: ON_BODY_CHANGE, payload: e.target.value });
};

export const initWriteForm = () => (dispatch) => {
  dispatch({ type: INIT_WRITE_FORM });
};

export const fetchModifyQuestion = id => (dispatch) => {
  axios
    .get(`${URL_API}/api/question/displayq/${id}`)
    .then(res => dispatch({ type: FETCH_MODIFY_QUESTION, payload: res.data.data }));
};

export const fetchModifyAnswer = id => (dispatch) => {
  axios
    .get(`${URL_API}/api/question/getanswer/${id}`)
    .then(res => dispatch({ type: FETCH_MODIFY_ANSWER, payload: res.data.data }));
};

export function fetchSortedByTag(tag, page) {
  return (dispatch) => {
    dispatch({ type: FETCH_SORTED_TAG_BEGIN });
    return axios
      .post(`${URL_API}/api/sort/tag/${tag}/${page}`)
      .then(res => dispatch({ type: FETCH_SORTED_TAG_SUCCESS, payload: res.data.data }));
  };
}
