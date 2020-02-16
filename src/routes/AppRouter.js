import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { SignIn } from '../pages/signIn';
import { SignUp } from '../pages/signUp';
import { Dashboard } from '../pages/dashboard';

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>
);

export default App;
