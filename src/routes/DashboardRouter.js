import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { SurveyList } from '../components/SurveyBlog';
import { SurveyTable } from '../components/SurveyTable';
import { CreateSurvey } from '../components/Forms/CreateSurveyForm';

const DashboardRouter = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <SurveyList />
      </Route>
      <Route path={`${path}/form`}>
        <CreateSurvey />
      </Route>
      <Route path={`${path}/table`}>
        <SurveyTable />
      </Route>
    </Switch>
  );
};

export default DashboardRouter;
