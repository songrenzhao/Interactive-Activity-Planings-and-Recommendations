/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
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
import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { SurveyFormSteps } from './SurveyFormSteps';

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

const CREATESURVEYRESPONSE = gql`
  mutation createSurveyResponse($name: String!, $results: [resultsInput!]!) {
    createSurveyResponse(name: $name, results: $results) {
      name
      results {
        question
        answer
      }
    }
  }
`;

const VIEWSURVEYFORM = gql`
  {
    viewSurveyForm {
      title
      description
      limit
      question
      selections {
          choice
          url
      }
    }
  }
`;

export const SurveyForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [stepsDataForm, setStepsDataForm] = useState([]);
  const [createSurveyResponse] = useMutation(CREATESURVEYRESPONSE);
  const { error, loading } = useQuery(VIEWSURVEYFORM, {
    onCompleted: (data) => {
      setStepsDataForm(data.viewSurveyForm);
    },
  });

  const handleChangeSelections = (selectionIndex) => (event) => {
    const updatedForm = [...stepsDataForm];
    updatedForm[activeStep].selections[selectionIndex].selected = event.target.checked;
    console.log(updatedForm);
    setStepsDataForm(updatedForm);
  };

  const SubmitRequest = async () => {
    try {
      const filteredResponse = stepsDataForm.map((step) => {
        const filteredAnswers = step.selections.filter((selection) => !!selection.selected)
          .map((answers) => answers.choice);
        const output = { question: step.title, answer: filteredAnswers };
        return output;
      });
      const { data } = await createSurveyResponse({
        variables: {
          name: cookie.load('name'),
          results: filteredResponse,
        },
      });
      console.log(data.createSurveyResponse);
    } catch (e) {
      throw e;
    }
  };

  const handleSubmit = async () => {
    try {
      await SubmitRequest();
    } catch (e) {
      const newError = { isError: true, errorMsg: 'Internal Service Error' };
      console.log(newError);
    }
  };

  const handleNext = async () => {
    if (activeStep === stepsDataForm.length - 1) {
      await handleSubmit();
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  if (loading) { return <div>Loading…</div>; }
  if (error) { return <div>Error</div>; }
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
            {stepsDataForm.map(({ title }, index) => (
              <Step key={index}>
                <StepLabel>{title}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === stepsDataForm.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for the survey.
                </Typography>
              </>
            ) : (
              <>
                {
                  stepsDataForm.length ? (
                    <SurveyFormSteps
                      dataForm={stepsDataForm[activeStep]}
                      onChange={handleChangeSelections}
                    />
                  ) : 'Form not set up yet!'
                }
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
                    {activeStep === stepsDataForm.length - 1 ? 'Submit Survey' : 'Next'}
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
