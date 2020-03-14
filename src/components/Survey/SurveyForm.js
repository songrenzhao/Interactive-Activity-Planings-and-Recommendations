import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import cookie from 'react-cookies';
import Typography from '@material-ui/core/Typography';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Location from './Location';
import Sport from './Sport';
import Food from './Food';
import Health from './Health';
import Art from './Art';
import Performing from './Performing';

function Copyright() {
  return (
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
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const CREATESURVEY = gql`
  mutation createSurvey($name: String!, $results: [resultsInput!]!) {
    createSurvey(name: $name, results: $results) {
      name
      results {
          question
          answer
      }
    }
  }
`;

const steps = ['Location', 'Food', 'Sport', 'Art&craft', 'Health&fitness', 'Performing art'];

export const SurveyForm = () => {
  const classes = useStyles();
  const [createSurvey] = useMutation(CREATESURVEY);
  const [activeStep, setActiveStep] = React.useState(0);
  const [dataForm, setDataForm] = React.useState({
    name: cookie.load('name') || 'song',
    Location: {},
    Food: {},
    Sport: {},
    Art: {},
    Health: {},
    Performing: {},
  });

  const handleChangeForQuestion = (question) => (event) => {
    const updatedForm = { ...dataForm };
    updatedForm[question][event.target.value] = event.target.checked;
    setDataForm(updatedForm);
  };

  const SubmitRequest = async () => {
    try {
      const { name, ...surveyCategories } = dataForm;
      const surveyCategoriesArray = Object.entries(surveyCategories);
      const userFeedback = [];
      surveyCategoriesArray.forEach((element) => {
        userFeedback.push({
          question: element[0],
          answer: Object.keys(element[1]),
        });
      });
      const response = await createSurvey({
        variables: {
          name,
          results: userFeedback,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async () => {
    try {
      await SubmitRequest();
    } catch (error) {
      const newError = { isError: true, errorMsg: 'Internal Service Error' };
      console.log(newError);
    }
  };

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      await handleSubmit();
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
    case 0:
      return <Location onChange={handleChangeForQuestion('Location')} />;
    case 1:
      return <Food onChange={handleChangeForQuestion('Food')} />;
    case 2:
      return <Sport onChange={handleChangeForQuestion('Sport')} />;
    case 3:
      return <Art onChange={handleChangeForQuestion('Art')} />;
    case 4:
      return <Health onChange={handleChangeForQuestion('Health')} />;
    case 5:
      return <Performing onChange={handleChangeForQuestion('Performing')} />;
    default:
      throw new Error('Unknown step');
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <a href="/src/pages/home">
              <img
                alt="logo"
                src="/images/IAPR_logo.png"
                className="profile-img"
                width="60px"
                height="60px"
                style={{ marginRight: '5px' }}
              />
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Survey
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for the survey.
                </Typography>

              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit Survey' : 'Next'}
                  </Button>
                </div>
              </>
            )}
          </>
        </Paper>
        <Copyright />
      </main>
    </>
  );
};
