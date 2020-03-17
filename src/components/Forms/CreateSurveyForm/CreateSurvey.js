/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './style';

export const CreateSurvey = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState([
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
  ]);

  const handleTabChange = (event, newValue) => {
    setActiveIndex(newValue);
    console.log(formData);
  };

  const handleFormDataChange = (category) => (event) => {
    const updatedFormData = formData;
    updatedFormData[activeIndex][category] = event.target.value;
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
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const submitSurvey = (e) => {
    e.preventDefault();
    console.log(formData);
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
                    {isLoading ? (
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
              <Tab label={`Category ${index}`} />
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
            style={{ marginLeft: '25%', width: '50%' }}
            color="primary"
            onClick={handleNext}
          >
            Next
          </Button>
          <Button
            type="submit"
            style={{ marginTop: '20px', marginLeft: '30%', width: '40%' }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
