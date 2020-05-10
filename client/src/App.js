import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Component/User/HomePage'
import NotFound from './Component/Extra/NotFound';
import Signin from './Component/User/Signin.js';
import Signup from './Component/User/Signup.js'
import AuthState from './Component/Context/Authorization/AuthState'
import AlertState from './Component/Context/Alert/AlertState'
import NewsFeed from './Component/News-Feed/NewsFeed';
import SideBar from './Component/News-Feed/SideBar';
import UserProfile from './Component/News-Feed/UserProfile';
import DarkMode from './Component/News-Feed/DarkMode';
import PrivateRoute from './Component/Extra/PrivateRoute'

function App() {
  return (

    <AuthState>
      <AlertState>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={Signin} />
              <Route exact path='/register' component={Signup} />
              <PrivateRoute exact path='/feed' component={NewsFeed} />
              <Route exact path='/profile' component={UserProfile} />
              <Route exact path='/test' component={DarkMode} />

              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
