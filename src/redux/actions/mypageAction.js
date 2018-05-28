import axios from 'axios';
import { FETCH_MY_QUESTION_BEGIN, FETCH_MY_QUESTION_SUCCESS } from './types';

export function fetchMyQuestion(userID) {
  return (dispatch) => {
    dispatch({ type: FETCH_MY_QUESTION_BEGIN });
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    return axios
      .get(`${process.env.API_PROD}/api/mypage/profile/${userID}`, config)
      .then(res => dispatch({ type: FETCH_MY_QUESTION_SUCCESS, payload: res.data.data }));
  };
}