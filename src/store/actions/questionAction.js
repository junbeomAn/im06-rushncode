import axios from 'axios';
import { FETCH_QUESTIONS, FETCH_ONE_QUESTION } from './types';

export const fetchQuestions = () => (dispatch) => {
  axios
    .get('http://localhost:3001/api/question/getlist')
    .then(res => dispatch({ type: FETCH_QUESTIONS, payload: res.data }));
};

export const fetchOne = id => (dispatch) => {
  axios
    .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => dispatch({ type: FETCH_ONE_QUESTION, payload: res.data }));
};
