import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cookie from 'react-cookies';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './style';

const expiredTime = 60 * 60 * 2; // 24hours

const SIGNIN = gql`
  {
    participants {
      name
    }
  }
`;

export const SignInParticipantForm = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(SIGNIN);

  const handleChange = (name) => () => {
    cookie.save('name', name, { path: '/', maxAge: expiredTime });
  };

  if (loading) { return <div>Loading…</div>; }
  if (error) { return <div>Error</div>; }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        container
        xs={12}
        sm={8}
        md={5}
        spacing={2}
        component={Paper}
        justify="space-evenly"
        alignItems="center"
        elevation={6}
        square
        className={classes.signInContainer}
      >
        {data.participants.map((value) => (
          <Grid item xs={3} md={3}>
            <CardActionArea component="a" href="/survey" onClick={handleChange(value.name)}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                  />
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {value.name}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
