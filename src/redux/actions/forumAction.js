import axios from 'axios';
import { FETCH_FORUM_LIST, FETCH_FORUM_ENTRY } from './types';

export const fetchForumList = () => (dispatch) => {
  axios
    .get('http://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch({ type: FETCH_FORUM_LIST, payload: res.data }));
};

export const fetchForumEntry = id => (dispatch) => {
  axios
    .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => dispatch({ type: FETCH_FORUM_ENTRY, payload: res.data }));
};
