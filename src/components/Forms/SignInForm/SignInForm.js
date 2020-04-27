/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
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

const SIGNIN = gql`
  mutation signIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      status
    }
  }
`;

export const SignInForm = () => {
  const classes = useStyles();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [successButton, setSuccessButton] = useState(false);
  const [failButton, setFailButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signIn] = useMutation(SIGNIN);
  const timer = useRef();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const buttonClassname = clsx({
    [classes.buttonSuccess]: successButton,
    [classes.buttonFail]: failButton,
  });

  const handleChange = (event) => {
    const updatedForm = { ...formData };
    updatedForm[event.target.name] = event.target.value;
    setFormData(updatedForm);
  };

  useEffect(() => () => {
    clearTimeout(timer.current);
  }, []);

  const signUpRequest = async () => {
    try {
      const { data } = await signIn({
        variables: {
          username: formData.username,
          password: formData.password,
        },
      });
      const { status } = data.signIn;
      timer.current = setTimeout(() => {
        setLoading(false);
        if (status) {
          setSuccessButton(true);
          setIsSignedIn(true);
        } else {
          setFailButton(true);
        }
      }, 1000);
    } catch (error) {
      throw error;
    }
  };

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      await signUpRequest();
    } catch (error) {
      const newError = { isError: true, errorMsg: 'Internal Service Error' };
      console.log(newError);
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {isSignedIn && <Redirect to="/dashboard" />}
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.signInContainer}>
        <div className={classes.paper}>
          <Avatar src="/images/GoodPlan_Logo.png" className={classes.avatar}> </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <div className={classes.wrapper}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
                className={buttonClassname}
              >
                Sign In
              </Button>
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {'Don\'t have an account? Sign Up'}
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
