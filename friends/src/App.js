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
      <div className="App">
        <Link to='/login'>Login</Link>
        <Link to='/protected'>Protected Page</Link>
      </div>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute paht='/protected' component={Protected} />
      </Switch>
    </Router>
  );
}

export default App;
