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
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={Paper}>
                  <DashboardRouter />
                  {/* <SurveyList /> */}
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              {/* <Copyright /> */}
            </Box>
          </Container>
        </main>
      </div>
    </Grid>
  );
};
