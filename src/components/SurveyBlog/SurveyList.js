import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// eslint-disable-next-line no-unused-vars
import Header from './Header';
import SurveyPost from './SurveyPost';
import Footer from './Footer';

// eslint-disable-next-line no-unused-vars
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
// eslint-disable-next-line no-unused-vars
const surveyPost = [
  {
    title: 'A Survey Form',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'B Survey Form',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];


// eslint-disable-next-line arrow-body-style
export const SurveyList = () => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-expressions
  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>

          <Container maxWidth="lg">
            <Typography component="h1" variant="h4" align="center">
              Survey Report
            </Typography>

            <Grid container spacing={5}>
              {surveyPost.map((post) => (
                <SurveyPost key={post.title} post={post} href="/SurveyTable" />
              ))}
            </Grid>

          </Container>

          <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </Paper>
      </main>
    </>
  );
};
