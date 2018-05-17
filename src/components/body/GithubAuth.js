import React from 'react';
import axios from 'axios';


const sendGithubReq = (code) => {
  const data = {
    code: code,
  }
  const githubUrl = 'http://localhost:3001/api/auth/github';
  axios
    .post(githubUrl, data)
    .then(res => console.log(res));// 로그인 처리하면된
}

const Github = () => {
  return (
    <div> 
      <button onClick={() => { sendGithubReq(window.location.href.split('=')[1]); }} >Verifying</button>      
      
    </div>
  );
};

export default Github;