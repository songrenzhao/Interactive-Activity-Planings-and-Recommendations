/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  card: {
    height: '100%',
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

const IAPR = [1];
const CCNY = [1];
const GoodWill = [1];

export const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            IAPR
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              Communication is Important.
            </Typography>
            <Typography variant="h6" align="left" color="textSecondary" paragraph>
              Some people have difficuties talking but still have thoughts they would like to express.
              When you have someone who finds it difficult to talk to others, IAPR is here to let their feelings and opinions be heard.

            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}

          <Grid container spacing={5}>
            {IAPR.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="IAPR's mission statement"
                  />
                  <img
                    alt="logo"
                    src="/images/IAPR_logo.png"
                    className="profile-img"
                    width="300px"
                    height="300px"
                    position="center"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h2" component="h2">
                      What is IAPR?
                    </Typography>
                    <Typography>
                      IAPR (Interactive Activity Plannings and Recommendations) is an app that focuses on increasing communication
                      between staff and the people they work with. Some people in the program can find it hard to communicate with people,
                      especially face to face, and if there is an activity that is planned for the day that they are uncomfortable with, they may have trouble
                      expressing it until it overwhelms them. Our app is designed to make it easier for the users to express their opinions and emotions
                      by giving them an easy medium and method to express themselves. We have achieved this by giving the staff the tools to create and edit
                      the schedule from any internet-capable device and the users to comment or react, using an emoji, to the activity, all in real-time! This
                      way, if one user has a problem with an activity but is uncomfortable in bringing it up with other people, the staff can take note and talk
                      to them in private.
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>
            ))}
            {CCNY.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="Our background"
                  />
                  <img
                    alt="logo"
                    src="/images/ccny-logo.jpg"
                    className="profile-img"
                    width="260px"
                    height="260px"
                    position="center"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h2" component="h2">
                      Who is IAPR?
                    </Typography>
                    <Typography>
                      We are Xiaoyan Zhang, Songren Zhao, Hyojun Moon, 3 undergraduate seniors at CCNY(The City College of New York).
                      Under the guidance of our senior design professor Prof. Zhigang Zhu, we met with the staff and Goodwill and found a way we could use our brain to help.
                      Professor Zhu's specialty in the Computer Science (CSc) department at CCNY is using technology to helped the disabled and as his students we were tasked
                      with finding a way to help those who need it the most. When we visited the Harlem Goodwill, we saw all the good the staff were doing in helping people with
                      autism to take control of their lives, find jobs, and be self-sustaining and we decided that we wanted to help in our way. That is when we drew up our first
                      outline for IAPR.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            {GoodWill.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="Our background"
                  />
                  <img
                    alt="logo"
                    src="/images/goodwilllogo.png"
                    className="profile-img"
                    width="400px"
                    height="260px"
                    position="center"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h2" component="h2">
                      Who is GoodWill?
                    </Typography>
                    <Typography>
                      Goodwill Industries International Inc., or shortened to Goodwill,
                      is an American nonprofit 501 organization that provides job training,
                      employment placement services, and other community-based programs for people who have barriers
                      preventing them from otherwise obtaining a job.
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>

            ))}
          </Grid>

        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom />
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Interactive Activitiy Plannings and Recommendations
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </>
  );
};
