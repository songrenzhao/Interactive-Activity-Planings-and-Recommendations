import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cookie from 'react-cookies';
import axios from 'axios';
import useStyles from './style';

const expiredTime = 60 * 60 * 2; // 24hours

const preprarePayload = () => {
  const payload = {
    url: 'https://iapr.herokuapp.com/graphql',
    method: 'post',
    data: {
      query: `
          {
            participants {
              name
            }
          }
      `,
    },
  };
  return payload;
};

export const SignInParticipantForm = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    participants: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const reqInfo = preprarePayload();
      const response = await axios(reqInfo);
      setData({ participants: response.data.data.participants });
    };
    fetchData();
  }, []);

  const handleChange = (name) => () => {
    cookie.save('name', name, { path: '/', maxAge: expiredTime });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        container
        xs={12}
        sm={8}
        md={5}
        spacing={1}
        component={Paper}
        justify="space-evenly"
        alignItems="center"
        elevation={6}
        square
        className={classes.signInContainer}
      >
        {data.participants.map((value) => (
          <Grid item xs={3}>
            <CardActionArea component="a" href="/survey" onClick={handleChange(value.name)}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {value.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {/* Date */}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      {/* Continue reading... */}
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
