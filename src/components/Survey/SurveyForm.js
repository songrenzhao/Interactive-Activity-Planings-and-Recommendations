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
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
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

const preprarePayload = (data) => {
  const { name, ...surveyCategories } = data;
  const surveyCategoriesArray = Object.entries(surveyCategories);
  const userFeedback = [];
  surveyCategoriesArray.forEach((element) => {
    userFeedback.push({
      question: element[0],
      results: Object.keys(element[1]),
    });
  });
  const payload = {
    url: 'https://iapr.herokuapp.com/graphql',
    method: 'post',
    data: {
      query: `
        mutation {
          createSurvey(name: "${name}", results: [{
            question: "${userFeedback[0].question}"
            answer: ${JSON.stringify(userFeedback[0].results)}
          }, {
            question: "${userFeedback[1].question}"
            answer: ${JSON.stringify(userFeedback[1].results)}
          }, {
            question: "${userFeedback[2].question}"
            answer: ${JSON.stringify(userFeedback[2].results)}
          }, {
            question: "${userFeedback[3].question}"
            answer: ${JSON.stringify(userFeedback[3].results)}
          }, {
            question: "${userFeedback[4].question}"
            answer: ${JSON.stringify(userFeedback[4].results)}
          }, {
            question: "${userFeedback[5].question}"
            answer: ${JSON.stringify(userFeedback[5].results)}
          }]) {
            name
            results {
                question
                answer
            }
          }
        }
      `,
    },
  };
  return payload;
};

const steps = ['Location', 'Food', 'Sport', 'Art&craft', 'Health&fitness', 'Performing art'];

export const SurveyForm = () => {
  const classes = useStyles();
  const [dataForm, setDataForm] = React.useState({
    name: cookie.load('name'),
    Location: {},
    Food: {},
    Sport: {},
    Art: {},
    Health: {},
    Performing: {},
  });
  const [activeStep, setActiveStep] = React.useState(0);

  const handleChangeForQuestion = (question) => (event) => {
    const updatedForm = { ...dataForm };
    updatedForm[question][event.target.value] = event.target.checked;
    setDataForm(updatedForm);
  };

  const SubmitRequest = async () => {
    try {
      const reqInfo = preprarePayload(dataForm);
      const response = await axios(reqInfo);
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
