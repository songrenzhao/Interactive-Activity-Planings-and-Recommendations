import React from 'react';
import { Grid } from '@material-ui/core';
import { SignInParticipantForm } from '../../components/Forms/ParticipantSignInForm';

export const SignIn = () => (
  <Grid container justify="center">
    <SignInParticipantForm />
  </Grid>
);
