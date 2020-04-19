/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import useStyles from './style';

const CREATEWEEKLYPLANNING = gql`
  mutation createWeeklyPlanning($weeklyPlanningData: [weeklyPlannings!]!) {
    createWeeklyPlanning(weeklyPlanningData: $weeklyPlanningData) {
      status
    }
  }
`;

const Activity = [
  { title: 'Exercise' },
  { title: 'Cooking Class' },
  { title: 'Movie Thether' },
  { title: 'Park' },
];

const formDataTemplate = [
  {
    selections: [{
      activity: '',
      url: '',
    }],
  },
];

export const WeeklySurveyForm = () => {
  const classes = useStyles();
  const timer = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPicLoading, setIsPicLoading] = useState(false);
  const [successButton, setSuccessButton] = useState(false);
  const [failButton, setFailButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createWeeklyPlanning] = useMutation(CREATEWEEKLYPLANNING);
  const [formData, setFormData] = React.useState(formDataTemplate);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: successButton,
    [classes.buttonFail]: failButton,
    [classes.defaultButton]: !successButton,
  });

  useEffect(() => () => {
    clearTimeout(timer.current);
  }, []);

  const handleTabChange = (_event, newValue) => {
    setActiveIndex(newValue);
    console.log(formData);
  };


  const handleNext = () => {
    if (activeIndex === formData.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleMoreSelection = () => {
    const updatedFormData = formData;
    updatedFormData[activeIndex].selections.push({
      activity: '',
      url: '',
    });
    setFormData(updatedFormData);
  };

  const handleMoreTab = () => {
    const updatedFormData = [...formData];
    updatedFormData.push({
      selections: [{
        activity: '',
        url: '',
      }],
    });
    setFormData(updatedFormData);
  };

  const uploadImage = (selectionIndex) => async (e) => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'IAPRLIVE');
    setIsPicLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/iapr/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    // eslint-disable-next-line camelcase
    const { secure_url } = await res.json();
    const updatedFormData = [...formData];
    // eslint-disable-next-line camelcase
    updatedFormData[activeIndex].selections[selectionIndex].url = secure_url;
    setFormData(updatedFormData);
    setIsPicLoading(false);
  };

  const submitSurvey = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setSuccessButton(false);
      setFailButton(false);
      console.log(formData);
      const { data } = await createWeeklyPlanning({
        variables: {
          weeklyPlanningData: formData,
        },
      });
      const { status } = data.createWeeklyPlanning;
      console.log(status);
      timer.current = setTimeout(() => {
        setLoading(false);
        if (status) {
          setSuccessButton(true);
        } else {
          setFailButton(true);
        }
      }, 1000);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setFailButton(true);
    }
  };

  const TabPanel = ({ data, index }) => {
    const {
      selections,
    } = data;

    const handleAutoFilledActivity = (selectionIndex) => (event, value) => {
      const updatedFormData = formData;
      updatedFormData[activeIndex].selections[selectionIndex].activity = value;
      setFormData(updatedFormData);
      console.log(formData);
    };

    const handleActivity = (selectionIndex) => (event) => {
      const updatedFormData = formData;
      updatedFormData[activeIndex].selections[selectionIndex].activity = event.target.value;
      setFormData(updatedFormData);
      console.log(formData);
    };

    return (
      <>
        {
          activeIndex === index
          && (
            <>
              <Grid container className={classes.FormGrid}>
                {selections.map((selection, selectionIndex) => (
                  <Grid item component={Paper} spacing={0} xs={12} sm={12} className={classes.selectionFormGrid}>
                    <>
                      <Autocomplete
                        id="activity"
                        freeSolo
                        style={{ width: '75%' }}
                        options={Activity.map((option) => option.title)}
                        defaultValue={selection.activity}
                        onChange={handleAutoFilledActivity(selectionIndex)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            onChange={handleActivity(selectionIndex)}
                            margin="normal"
                            variant="outlined"
                          />
                        )}
                      />
                    </>
                    <Button variant="outlined" color="primary" component="label" className="button">
                      Upload File
                      <input
                        type="file"
                        name="file"
                        style={{ display: 'none' }}
                        onChange={uploadImage(selectionIndex)}
                      />
                    </Button>
                    {isPicLoading ? (
                      <h3>Loading</h3>
                    ) : (
                      <CardMedia
                        className={classes.media}
                        image={selection.url}
                        title="Contemplative Reptile"
                      />
                    )}
                  </Grid>
                ))}
                <Grid item xs={6} sm={6} className={classes.selectionFormGrid}>
                  <Button variant="outlined" color="primary" href="#outlined-buttons" onClick={handleMoreSelection}>
                    Add new selection
                  </Button>
                </Grid>
              </Grid>
            </>
          )
        }
      </>
    );
  };

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} justify="center">
        <Paper>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            scrollButtons="auto"
            centered
            value={activeIndex}
            onChange={handleTabChange}
          >
            {formData.map((_, index) => (
              <Tab label={`Week ${index + 1}`} />
            ))}
            <Fab size="small" color="primary" aria-label="add" onClick={handleMoreTab}>
              <AddIcon />
            </Fab>
          </Tabs>
        </Paper>
        <form className={classes.form} onSubmit={submitSurvey}>
          {formData.map((data, index) => (
            <TabPanel data={data} index={index} />
          ))}
          <Button
            style={{ marginLeft: '90%' }}
            color="primary"
            variant="contained"
            onClick={handleNext}
          >
            Next
          </Button>
          <div className={classes.wrapper}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              className={buttonClassname}
            >
              Submit
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </form>
      </Grid>
    </Grid>
  );
};
