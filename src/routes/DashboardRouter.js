import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { SurveyList } from '../components/SurveyBlog';
import { SurveyTable } from '../components/SurveyTable';
import { CreateParticipant } from '../components/Forms/CreateParticipant';
import { CreateSurvey } from '../components/Forms/CreateSurveyForm';
import { Schedule } from '../components/Schedule';
import { WeeklySurveyForm } from '../components/Forms/WeeklySurveyForm';
import { WeeklyResponseList } from '../components/WeeklyResponse';
import { DetailedResponse } from '../components/WeeklyResponse/DetailedResponse';

const client = new ApolloClient({
  uri: 'https://iapr.herokuapp.com/graphql',
});

const DashboardRouter = () => {
  const { path } = useRouteMatch();
  return (
    <ApolloProvider client={client}>
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
        <Route path={`${path}/participant`}>
          <CreateParticipant />
        </Route>
        <Route path={`${path}/schedule`}>
          <Schedule />
        </Route>
        <Route path={`${path}/planning`}>
          <WeeklySurveyForm />
        </Route>
        <Route path={`${path}/weeklyresponse`}>
          <WeeklyResponseList />
        </Route>
        <Route path={`${path}/profile`}>
          <DetailedResponse />
        </Route>
      </Switch>
    </ApolloProvider>
  );
};

export default DashboardRouter;
