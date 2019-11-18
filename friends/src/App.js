/* Reference source - hooks
 https://github.com/DevWarr/Redux-Friends/blob/WEB23_afterhours/friends/src/components/FriendList.js
 */

import React from 'react';
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';

import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='container'>
      <div className="App">
        <Link to='/login'>Login</Link>
        <Link to='/protected'>Protected Page</Link>
      </div>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/protected' component={Protected} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
