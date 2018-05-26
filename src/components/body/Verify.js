import axios from 'axios';

const Verify = async () => {
  // let verified = false;
  // console.log(this, 'verify executed~~~~~~');

  const verifyUrl = 'http://localhost:3001/api/auth/verify';
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'x-access-token': token },
  };

  const res = await axios(verifyUrl, config);
  const success = await res.data.success;
  
  // console.log(success);
  // .then((res) => {
  //   if (res.data.success) {
  //     // console.log('redirect');
  //     verified = res.data.success;
  //     console.log(verified);
  //   } else {
  //     // no token
  //     console.log('alert to suggest login, redirect to login');
  //   }
  // })
  // .catch(err => console.log(err));
  // console.log('verified : ', verified);  
  return success;
};

export default Verify;
