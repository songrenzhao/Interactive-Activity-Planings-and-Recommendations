import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Participant from './Participant';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(5),
  },

  appBar: {
    position: 'relative',
  },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(0),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const ThirtyDaysAgo = new Date(new Date() - 1000 * 60 * 60 * 24 * 30);

const viewSurveys = gql`
    query surveys($date: String!) {
      surveys(date: $date) {
        name
        createdAt
      }
    }
`;

export const CreateParticipant = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(viewSurveys, {
    variables: {
      date: ThirtyDaysAgo,
    },
  });
  if (loading) { return <div>Loading…</div>; }
  if (error) { return <div>Error</div>; }
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Survey Report" />
        <main>
          <Grid container spacing={4} className={classes.mainGrid}>
            {data.surveys.map((post) => (
              <Participant name={post.name} date={post.createdAt} href={`/SurveyTable?name=${post.name}`} />
            ))}
          </Grid>
        </main>
      </Container>
    </>
  );
};
