import axios from 'axios';
import { FETCH_QUESTION_LIST, FETCH_QUESTION_ENTRY, FETCH_QUESTION_TAG } from './types';

export const fetchQuestionList = () => (dispatch) => {
  axios
    .get('http://localhost:3001/api/question/getlist')
    .then(res => dispatch({ type: FETCH_QUESTION_LIST, payload: res.data.data }));
};

export const fetchQuestionEntry = id => (dispatch) => {
  axios
    .get(`http://localhost:3001/api/question/displayq/${id}`)
    .then(res => dispatch({ type: FETCH_QUESTION_ENTRY, payload: res.data.data }));
};

export const fetchQuestionTag = () => (dispatch) => {
  axios
    .get('http://localhost:3001/api/question/gettag')
    .then(res => dispatch({ type: FETCH_QUESTION_TAG, payload: res.data.data }));
};