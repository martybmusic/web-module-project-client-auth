import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';
import Login from './components/Login';

import './App.css';

function App(props) {
  const logout = () => {
    localStorage.removeItem('token');
  };

  const isAuth = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Authentication</h1>
          <div className="App-nav">
            <span>
              <li><Link to='/login'>LOG IN</Link></li>
            </span>
            <span>
              <li>{!isAuth ? <Link to='/friends'>MY FRIENDS</Link> : <div></div>}</li>
            </span>
            <span>
              <li><Link to='/friends/form'>ADD FRIENDS</Link></li>
            </span>
            <span>
              <li><Link onClick={logout}>LOG OUT</Link></li>
            </span>
          </div>
        </header>
        <Switch>
          <PrivateRoute exact path='/friends/form' component={FriendForm} />
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <Route path='/login' component={Login}/>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
