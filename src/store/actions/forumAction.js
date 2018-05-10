import { FETCH_FORUMS, FETCH_ONE_FORUM } from './types';
import axios from 'axios';

export const fetchforums = () => (dispatch) => {
  axios
    .get('http://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch({ type: FETCH_FORUMS, payload: res.data }));
};

export const fetchOne = id => (dispatch) => {
  axios
    .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => dispatch({ type: FETCH_ONE_FORUM, payload: res.data }));
};
