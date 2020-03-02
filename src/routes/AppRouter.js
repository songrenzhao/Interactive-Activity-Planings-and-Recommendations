import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { SignIn, SignInParticipant } from '../pages/signIn';
import { SignUp } from '../pages/signUp';
import { Dashboard } from '../pages/dashboard';
import { Survey } from '../pages/Survey';

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signinparticipant" component={SignInParticipant} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/Survey" component={Survey} />
  </Router>
);

export default App;
