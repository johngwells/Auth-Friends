import React from 'react';
import './App.css';

import Login from './components/Login';

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
      </Switch>
    </Router>
  );
}

export default App;
