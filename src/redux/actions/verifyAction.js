import axios from 'axios';
import { createBrowserHistory } from 'history';
import { VERIFICATION, SIGNOUT } from './types';

const history = createBrowserHistory();

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
        console.log('verified');
        dispatch({ type: VERIFICATION, payload: res.data.success });
        history.push('/');
      } else {
        console.log('not verified');
        history.push('/auth');
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
    history.push('/auth');
  }
};
