const Logout = ({ history }) => {
  const token = localStorage.getItem('token');
  if (token) {
    localStorage.removeItem('token');
    history.push('/');
  }
  console.log('redirect logged out home');
};

export default Logout;
