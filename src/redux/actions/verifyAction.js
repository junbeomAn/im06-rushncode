import axios from 'axios';
// import { createBrowserHistory } from 'history';
import { VERIFICATION, SIGNOUT } from './types';

// const history = createBrowserHistory();

export const Verify = () => (dispatch) => {
  const verifyUrl = 'http://localhost:3001/api/auth/verify';
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'x-access-token': token },
  };

  axios
    .get(verifyUrl, config)
    .then((res) => {
      if (res.data.success) {
        console.log('verified'); // 여기선 push 를 해도 바뀌지않음. 리덕스와 연결되어 있지 않아서...
        dispatch({ type: VERIFICATION, payload: res.data });
      } else {
        console.log('not verified');
      }
    })
    .catch(err => console.log(err));
};

// export const SignIn = () => (dispatch) => {

// };

export const SignOut = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    localStorage.removeItem('token');
    dispatch({ type: SIGNOUT });
  }
};
