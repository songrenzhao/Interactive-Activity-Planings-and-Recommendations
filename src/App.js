import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SignIn } from './pages/signIn';

const App = () => (
  <Router>
    <Route path="/" exact component={SignIn} />
    {/* <Route path="/chat" component={Chat} /> */}
  </Router>
);

export default App;
