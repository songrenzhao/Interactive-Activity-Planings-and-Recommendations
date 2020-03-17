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
import useStyles from './style';

export const CreateSurvey = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = React.useState(0);
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
    const updatedFormData = formData;
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
                autoFocus
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
              <Paper>
                <Grid container className={classes.FormGrid}>
                  {selections.map((selection, selectionIndex) => (
                    <Grid item component={Paper} xs={12} sm={12} className={classes.selectionFormGrid}>
                      <TextField
                        required
                        id={`selection-${index}-${selectionIndex}`}
                        name={`selection-${index}-${selectionIndex}`}
                        label="Selection"
                        onChange={handleSelectionChange(selectionIndex)}
                        defaultValue={selection.choice}
                      />
                      <Button variant="outlined" color="primary" href="#outlined-buttons">
                        Select Image
                      </Button>
                    </Grid>
                  ))}
                  <Grid item xs={6} sm={6} className={classes.selectionFormGrid}>
                    <Button variant="outlined" color="primary" href="#outlined-buttons" onClick={handleMoreSelection}>
                      Add new selection
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
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
        <form className={classes.form}>
          {formData.map((data, index) => (
            <TabPanel data={data} index={index} />
          ))}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            Next
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
