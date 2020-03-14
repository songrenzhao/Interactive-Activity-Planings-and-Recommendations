import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import useStyles from './style';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://www.goodwillnynj.org/">
      Goodwill NYNJ
    </Link>
    {' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

const SIGNUP = gql`
  mutation signUp($name: String!, $username: String!, $email: String!, $password: String!) {
    signUp(name: $name, username: $username, email: $email, password: $password) {
      status
    }
  }
`;

export const SignUpForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleChange = (event) => {
    const updatedForm = { ...formData };
    updatedForm[event.target.name] = event.target.value;
    setFormData(updatedForm);
  };

  const [signUp] = useMutation(SIGNUP);

  const signUpRequest = async () => {
    try {
      const { data } = await signUp({
        variables: {
          name: formData.name,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
      });
      const { status } = data.signUp;
      if (status) {
        setIsSignedUp(true);
      }
    } catch (error) {
      throw error;
    }
  };

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await signUpRequest();
    } catch (error) {
      const newError = { isError: true, errorMsg: 'Internal Service Error' };
      console.log(newError);
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {isSignedUp && <Redirect to="/signin" />}
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.signUpContainer}>
        <div className={classes.paper}>
          <Avatar src="/images/IAPR_Logo.png" className={classes.avatar}> </Avatar>
          <Typography component="h1" variant="h5">
            Create an Account
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Enter your password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs={12} className={classes.signInRedirect}>
                <Link href="/signin" variant="body2">
                  Have an account? Sign In
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
