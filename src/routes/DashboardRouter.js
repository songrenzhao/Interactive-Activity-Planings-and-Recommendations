import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { SurveyForm } from '../components/Survey';
import { SurveyList } from '../components/SurveyBlog';
import { SurveyTable } from '../components/SurveyTable';

const DashboardRouter = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <SurveyList />
      </Route>
      <Route path={`${path}/form`}>
        <SurveyForm />
      </Route>
      <Route path={`${path}/table`}>
        <SurveyTable />
      </Route>
    </Switch>
  );
};

export default DashboardRouter;
