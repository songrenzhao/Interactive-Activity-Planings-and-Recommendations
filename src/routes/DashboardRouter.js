import React from 'react';
import { Route } from 'react-router-dom';
import { SurveyForm } from '../components/Survey';
import { SurveyList } from '../components/SurveyBlog';
import { SurveyTable } from '../components/SurveyTable';


// eslint-disable-next-line no-unused-vars
const DashboardRouter = (props) => (
  <>
    <Route path="/" component={SurveyList} />
    <Route path="/survey" component={SurveyForm} />
    <Route path="/survey-table" component={SurveyTable} />
  </>
);

export default DashboardRouter;
