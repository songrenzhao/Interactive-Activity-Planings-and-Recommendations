import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { SignIn } from '../pages/signIn';
import { SignUp } from '../pages/signUp';
import { Dashboard } from '../pages/dashboard';
import { Survey } from '../pages/Survey';
import { SurveyBlog } from '../pages/SurveyBlog';
import { SurveyTable } from '../components/SurveyTable';


const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/Survey" component={Survey} />
    <Route path="/SurveyBlog" component={SurveyBlog} />
    <Route path="/SurveyTable" component={SurveyTable} />
  </Router>
);

export default App;
