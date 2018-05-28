import axios from 'axios';
import { FETCH_MY_QUESTION_BEGIN, FETCH_MY_QUESTION_SUCCESS } from './types';

import { URL_API } from '../../config';

export function fetchMyQuestion(userID) {
  return (dispatch) => {
    dispatch({ type: FETCH_MY_QUESTION_BEGIN });
    const config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    };
    return axios
      .get(`${URL_API}/api/mypage/profile/${userID}`, config)
      .then(res => dispatch({ type: FETCH_MY_QUESTION_SUCCESS, payload: res.data.data }));
  };
}
