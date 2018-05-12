import axios from 'axios';

const Verify = async (e) => {
  let verified = false;
  console.log(this);
  // verify function./....
  const verifyUrl = 'http://localhost:3001/api/auth/verify';
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'x-access-token': token },
  };

  await axios
    .get(verifyUrl, config)
    .then((res) => {
      if (res.data.success) {
        console.log('redirect');
        verified = res.data.success;
      } else { // no token
        console.log('alert to suggest login, redirect to login');
      }
    })
    .catch(err => console.log(err));
  return verified;
};

export default Verify;

