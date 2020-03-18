import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { SignIn, SignInParticipant } from '../pages/signIn';
import { SignUp } from '../pages/signUp';
import { Dashboard } from '../pages/dashboard';

const client = new ApolloClient({
  uri: 'http://iapr.herokuapp.com/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signinparticipant" component={SignInParticipant} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  </ApolloProvider>
);

export default App;
