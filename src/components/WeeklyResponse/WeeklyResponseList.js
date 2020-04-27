import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Container from '@material-ui/core/Container';
import Header from './Header';
import { WeeklyResponse } from './WeeklyResponse';

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

const VIEWWEEKLYPLANNINGRESPONSE = gql`
    query viewWeeklyPlanningResponse($participant: String, $createdAt: String) {
    viewWeeklyPlanningResponse(participant: $participant, createdAt: $createdAt) {
        formData {
            selections {
                activity
                reaction
            }
        }
        participant
        createdAt
    }
}
`;

export const WeeklyResponseList = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(VIEWWEEKLYPLANNINGRESPONSE);
  if (loading) { return <div>Loading…</div>; }
  if (error) { return <div>Error</div>; }
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Weekly Response Report" />
        <main>
          <Grid container spacing={4} className={classes.mainGrid}>
            {data.viewWeeklyPlanningResponse.map((post) => (
              <WeeklyResponse name={post.participant} date={post.createdAt} />
            ))}
          </Grid>
        </main>
      </Container>
    </>
  );
};
