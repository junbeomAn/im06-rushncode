import { FETCH_QUESTIONS, FETCH_ONE_QUESTION } from './types';
import axios from 'axios';

export const fetchQuestions = () => (dispatch) => {
  axios
    .get('http://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch({ type: FETCH_QUESTIONS, payload: res.data }));
};

export const fetchOne = id => (dispatch) => {
  axios
    .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => dispatch({ type: FETCH_ONE_QUESTION, payload: res.data }));
};
