import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { SurveyList } from '../components/SurveyBlog';
import { SurveyTable } from '../components/SurveyTable';
import { CreateSurvey } from '../components/Forms/CreateSurveyForm';

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
      </Switch>
    </ApolloProvider>
  );
};

export default DashboardRouter;
