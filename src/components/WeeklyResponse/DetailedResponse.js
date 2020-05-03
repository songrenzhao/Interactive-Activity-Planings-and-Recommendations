/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import useStyles from './style';

const VIEWWEEKLYPLANNINGRESPONSE = gql`
  query viewWeeklyPlanningResponse($participant: String, $createdAt: String) {
    viewWeeklyPlanningResponse(participant: $participant, createdAt: $createdAt) {
      formData {
        selections {
          activity
          reaction
        }
      }
      participant
      createdAt
    }
  }
`;

export const DetailedResponse = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const participant = params.get('participant');
  const createdAt = params.get('createdAt');
  const [responseData, setResponseData] = React.useState([]);
  const { loading, error } = useQuery(VIEWWEEKLYPLANNINGRESPONSE, {
    variables: {
      participant,
      createdAt,
    },
    onCompleted: (data) => {
      const { viewWeeklyPlanningResponse } = data;
      const { formData } = viewWeeklyPlanningResponse[0];
      setResponseData(formData);
    },
  });

  const handleTabChange = (event, newValue) => {
    setActiveIndex(newValue);
    console.log(responseData);
  };

  const handleNext = () => {
    if (activeIndex === responseData.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const TabPanel = ({ data, index }) => {
    const {
      selections,
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
                value={`Day ${index + 1}`}
              />
              <Grid container className={classes.FormGrid}>
                {selections.map((selection, selectionIndex) => (
                  <Grid item component={Paper} spacing={2} xs={12} sm={12} className={classes.selectionFormGrid}>
                    <TextField
                      required
                      id={`selection-${index}-${selectionIndex}`}
                      name={`selection-${index}-${selectionIndex}`}
                      label="Selection"
                      value={selection.activity}
                    />
                    <FormControlLabel
                      value="happy"
                      style={{ marginBottom: '3em' }}
                      control={(
                        <Radio
                          color="primary"
                          checked={selection.reaction === 'happy'}
                        />
                      )}
                      label={(
                        <Grid container direction="row" alignItems="center">
                          <Grid item>
                            <InsertEmoticonIcon
                              className="material-icons"
                              style={{ fontSize: '70px' }}
                            />
                          </Grid>
                        </Grid>
                      )}
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="ok"
                      style={{ marginBottom: '3em' }}
                      control={(
                        <Radio
                          color="primary"
                          checked={selection.reaction === 'ok'}
                        />
                      )}
                      label={(
                        <Grid container direction="row" alignItems="center">
                          <Grid item>
                            <SentimentSatisfiedIcon
                              className="material-icons"
                              style={{ fontSize: '70px' }}
                            />
                          </Grid>
                        </Grid>
                      )}
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="sad"
                      style={{ marginBottom: '3em' }}
                      control={(
                        <Radio
                          color="primary"
                          checked={selection.reaction === 'sad'}
                        />
                      )}
                      label={(
                        <Grid container direction="row" alignItems="center">
                          <Grid item>
                            <SentimentVeryDissatisfiedIcon
                              className="material-icons"
                              style={{ fontSize: '70px' }}
                            />
                          </Grid>
                        </Grid>
                      )}
                      labelPlacement="top"
                    />
                  </Grid>
                ))}
              </Grid>
            </>
          )
        }
      </>
    );
  };
  if (loading) { return <div>Loading…</div>; }
  if (error) { return <div>Error</div>; }
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
            {responseData.map((_, index) => (
              <Tab label={`Category ${index + 1}`} />
            ))}
          </Tabs>
        </Paper>
        <form className={classes.form}>
          {responseData.map((data, index) => (
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
        </form>
      </Grid>
    </Grid>
  );
};
