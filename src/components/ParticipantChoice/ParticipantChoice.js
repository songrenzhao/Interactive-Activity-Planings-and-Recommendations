import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(10),
    },
  },
}));

export const ParticipantChoice = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" component="a" href="/survey">
        Survey Form
      </Button>
      <Button variant="contained" color="secondary">
        Weekly Plan
      </Button>
    </div>
  );
}
