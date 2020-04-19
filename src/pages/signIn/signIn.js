import React from 'react';
import { Grid } from '@material-ui/core';
import { SignInForm } from '../../components/Forms/SignInForm';
import { SignInParticipantForm } from '../../components/Forms/ParticipantSignInForm';

export const SignIn = () => (
  <Grid container justify="center">
    <SignInForm />
  </Grid>
);

export const SignInParticipant = () => (
  <Grid container justify="center">
    <SignInParticipantForm />
  </Grid>
);
