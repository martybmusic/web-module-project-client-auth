import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import AxiosWithAuth from './utils/AxiosWithAuth';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';
import Login from './components/Login';

import './App.css';

function App(props) {
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
              <li><Link to='/friends'>MY FRIENDS</Link></li>
            </span>
            <span>
              <li><Link>LOG OUT</Link></li>
            </span>
          </div>
        </header>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
