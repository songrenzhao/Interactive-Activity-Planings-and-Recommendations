import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { NavBar } from '../../components/NavBar';
// import { SurveyList } from '../../components/SurveyBlog';
import DashboardRouter from '../../routes/DashboardRouter';
import useStyles from './style';

export const Dashboard = () => {
  const classes = useStyles();
  return (
    <Grid item justify="center">
      <div className={classes.root}>
        <NavBar />
        <main className={classes.content}>
          <Paper className={Paper}>
            <DashboardRouter />
          </Paper>
        </main>
      </div>
    </Grid>
  );
};
