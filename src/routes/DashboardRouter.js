import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { SurveyForm } from '../components/Survey';
import { SurveyList } from '../components/SurveyBlog';
import { SurveyTable } from '../components/SurveyTable';
import { CreateParticipant } from '../components/CreateParticipant';

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
      <Route path={`${path}/participant`}>
        <CreateParticipant />
      </Route>
    </Switch>
  );
};

export default DashboardRouter;
