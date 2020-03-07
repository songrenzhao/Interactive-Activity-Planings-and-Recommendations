import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { SignIn, SignInParticipant } from '../pages/signIn';
import { SignUp } from '../pages/signUp';
import { Dashboard } from '../pages/dashboard';
import { Survey } from '../pages/Survey';
import { SurveyBlog } from '../pages/SurveyBlog';
import { SurveyTable } from '../components/SurveyTable';

const client = new ApolloClient({
  uri: 'https://iapr.herokuapp.com/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signinparticipant" component={SignInParticipant} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/Survey" component={Survey} />
      <Route path="/SurveyBlog" component={SurveyBlog} />
      <Route path="/SurveyTable" component={SurveyTable} />
    </Router>
  </ApolloProvider>
);

export default App;
