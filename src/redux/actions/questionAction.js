import axios from 'axios';
import {
  FETCH_QUESTION_LIST_BEGIN,
  FETCH_QUESTION_LIST_SUCCESS,
  FETCH_QUESTION_LIST_FAILURE,
  FETCH_QUESTION_ENTRY,
  FETCH_QUESTION_TAG,
} from './types';

export function fetchQuestionList(page) {
  return (dispatch) => {
    dispatch({ type: FETCH_QUESTION_LIST_BEGIN });
    return axios
      .get(`http://localhost:3001/api/question/getlist/${page}`)
      .then(res => dispatch({ type: FETCH_QUESTION_LIST_SUCCESS, payload: res.data.data }))
      .catch(error =>
        dispatch({
          type: FETCH_QUESTION_LIST_FAILURE,
          payload: { error },
        }));
  };
}

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

// export const fetchQuestionList = page => (dispatch) => {
//   if (!page) page = 1;
// axios
//   .get(`http://localhost:3001/api/question/getlist/${page}`)
//     .then(res => dispatch({ type: FETCH_QUESTION_LIST, payload: res.data.data }));
// };

