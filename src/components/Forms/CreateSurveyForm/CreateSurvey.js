/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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

const CREATESURVEYFORM = gql`
  mutation createSurveyForm($formData: [formData!]!, $createdAt: String) {
    createSurveyForm(formData: $formData, createdAt: $createdAt) {
      status
    }
  }
`;

const formDataTemplate = [
  {
    title: '',
    description: '',
    limit: '',
    question: '',
    selections: [{
      choice: '',
      url: '',
    }],
  },
  {
    title: '',
    description: '',
    limit: '',
    question: '',
    selections: [{
      choice: '',
      url: '',
    }],
  },
  {
    title: '',
    description: '',
    limit: '',
    question: '',
    selections: [{
      choice: '',
      url: '',
    }],
  },
];

export const CreateSurvey = () => {
  const classes = useStyles();
  const timer = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPicLoading, setIsPicLoading] = useState(false);
  const [successButton, setSuccessButton] = useState(false);
  const [failButton, setFailButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createSurveyForm] = useMutation(CREATESURVEYFORM);
  const [formData, setFormData] = React.useState(formDataTemplate);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: successButton,
    [classes.buttonFail]: failButton,
    [classes.defaultButton]: !successButton,
  });

  useEffect(() => () => {
    clearTimeout(timer.current);
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveIndex(newValue);
    console.log(formData);
  };

  const handleFormDataChange = (category) => (event) => {
    const updatedFormData = formData;
    if (category === 'limit') {
      updatedFormData[activeIndex][category] = parseInt(event.target.value, 10);
    } else {
      updatedFormData[activeIndex][category] = event.target.value;
    }
    setFormData(updatedFormData);
  };

  const handleSelectionChange = (selectionIndex) => (event) => {
    const updatedFormData = formData;
    updatedFormData[activeIndex].selections[selectionIndex].choice = event.target.value;
    setFormData(updatedFormData);
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
      choice: '',
      url: '',
    });
    setFormData(updatedFormData);
  };

  const handleMoreTab = () => {
    const updatedFormData = [...formData];
    updatedFormData.push({
      title: '',
      description: '',
      limit: '',
      question: '',
      selections: [{
        choice: '',
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
    const { secure_url } = await res.json();
    const updatedFormData = [...formData];
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
      const { data } = await createSurveyForm({
        variables: {
          formData,
          createdAt: new Date(),
        },
      });
      const { status } = data.createSurveyForm;
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
      title, description, limit, question, selections,
    } = data;
    return (
      <>
        {
          activeIndex === index
          && (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={`title-${index}`}
                label="Title"
                name={`title-${index}`}
                defaultValue={title}
                onChange={handleFormDataChange('title')}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name={`description-${index}`}
                label="Description"
                id={`description-${index}`}
                onChange={handleFormDataChange('description')}
                defaultValue={description}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="number"
                name={`limit-${index}`}
                label="Limit"
                id={`limit-${index}`}
                onChange={handleFormDataChange('limit')}
                defaultValue={limit}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name={`question-${index}`}
                label="Question"
                onChange={handleFormDataChange('question')}
                defaultValue={question}
                id={`question-${index}`}
              />
              <Grid container className={classes.FormGrid}>
                {selections.map((selection, selectionIndex) => (
                  <Grid item component={Paper} spacing={2} xs={12} sm={12} className={classes.selectionFormGrid}>
                    <TextField
                      required
                      id={`selection-${index}-${selectionIndex}`}
                      name={`selection-${index}-${selectionIndex}`}
                      label="Selection"
                      onChange={handleSelectionChange(selectionIndex)}
                      defaultValue={selection.choice}
                    />
                    <Button variant="outlined" color="primary" component="label">
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
              <Tab label={`Category ${index + 1}`} />
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
