/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import './style.css';


export const Week = ({ dataForm, onChange }) => {
  const { Activity, selections } = dataForm;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {Activity}
      </Typography>
      {selections.map((selection, index) => (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="position" name="position" defaultValue="top" className="space">
                <FormControlLabel
                  control={(
                    <KeyboardArrowRightIcon />
                  )}
                  label={(
                    <Grid container direction="row" alignItems="center">
                      <Grid item>
                        <img
                          src={selection.url}
                          className="profile-img"
                          width="150px"
                          height="150px"
                          style={{ marginRight: '5px' }}
                        />
                      </Grid>
                      {selection.choice}
                    </Grid>
                  )}
                />
                <FormControlLabel
                  value="happy"
                  control={(
                    <Radio
                      color="primary"
                      checked={selection.reaction === 'happy'}
                      onChange={onChange(index)}
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
                      {selection.choice}
                    </Grid>
                  )}
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="ok"
                  control={(
                    <Radio
                      color="primary"
                      checked={selection.reaction === 'ok'}
                      onChange={onChange(index)}
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
                      {selection.choice}
                    </Grid>
                  )}
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="sad"
                  control={(
                    <Radio
                      color="primary"
                      checked={selection.reaction === 'sad'}
                      onChange={onChange(index)}
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
                      {selection.choice}
                    </Grid>
                  )}
                  labelPlacement="top"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
