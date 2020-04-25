/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
const styles = {
  root: {
    background: (props) => (props.color === 'red'
      ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'),
    border: 0,
    borderRadius: 3,
    boxShadow: (props) => (props.color === 'red'
      ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
      : '0 3px 5px 2px rgba(33, 203, 243, .3)'),
    color: 'white',
    font: '30px',
    height: 500,
    textAlign: 'center',
    text: 'bold',
    padding: '0 200px',
    margin: 8,
  },
};

function MyButtonRaw(props) {
  const { classes, color, ...other } = props;
  return <Button className={classes.root} {...other} />;
}

MyButtonRaw.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['blue', 'red']).isRequired,
};

const MyButton = withStyles(styles)(MyButtonRaw);

export const ParticipantChoice = () => (
  <>
    <MyButton color="red" component="a" href="/survey">
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Survey Form</Typography>
      </ThemeProvider>
    </MyButton>
    <MyButton color="blue" component="a" href="/WeeklyPlan">
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Weekly Plan</Typography>
      </ThemeProvider>
    </MyButton>
  </>
);
