import createHistory from 'history/createBrowserHistory';
 
const history = createHistory();
const Logout = () => {
  const token = localStorage.getItem('token');
  if (token) {
    localStorage.removeItem('token');
    // console.log(history);
    history.push('/');
  }
  console.log('redirect logged out home');
};

export default Logout;
