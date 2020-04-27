/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright � '}
      <Link color="inherit" href="https://www.goodwillnynj.org/">
        Goodwill NYNJ
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 5),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  card: {
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '10%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const GoodPlan = [1];
const CCNY = [1];
const GoodWill = [1];

export const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar color="#2196f3">
          <a href="/signin">
            <img
              alt="logo"
              src="/images/GoodPlan_Logo.jpg"
              className="profile-img"
              width="60px"
              height="60px"
              style={{ marginRight: '5px' }}
            />
            <Button variant="contained" size="medium" color="white" className={classes.margin}>
              Sign In / Sign Up
            </Button>
          </a>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Communication is Important.
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
              Some people have difficuties talking but still have thoughts they would like to express.
              When you have someone who finds it difficult to talk to others, GoodPlan is here to let their feelings and opinions be heard.

            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}

          <Grid container spacing={10}>
            {GoodPlan.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={4}>
                <a href="/signin">
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      title="GoodPlan's mission statement"
                    />
                    <img
                      alt="logo"
                      src="/images/GoodPlan_Logo.png"
                      className="profile-img"
                      width="210px"
                      height="300px"
                      position="center"
                    />
                  </Card>
                </a>
              </Grid>
            ))}
            {CCNY.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={4}>
                <a href="https://www.ccny.cuny.edu/">
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      title="Our background"
                    />
                    <img
                      alt="logo"
                      src="/images/ccny-logo.jpg"
                      className="profile-img"
                      width="210px"
                      height="260px"
                      position="center"
                    />
                  </Card>
                </a>
              </Grid>
            ))}
            {GoodWill.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={4}>
                <a href="https://www.goodwill.org/">
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      title="Our background"
                    />
                    <img
                      alt="logo"
                      src="/images/goodwilllogo.png"
                      className="profile-img"
                      width="215px"
                      height="200px"
                      position="center"
                    />
                  </Card>
                </a>
              </Grid>

            ))}
          </Grid>
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom />
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Good Plan
            </Typography>
            <Copyright />
          </footer>
          {/* End footer */}
        </Container>
      </main>
    </>
  );
};
