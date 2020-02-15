import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { SignIn } from '../pages/signIn';
import { SignUp } from '../pages/signUp';

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Router>
);

export default App;
