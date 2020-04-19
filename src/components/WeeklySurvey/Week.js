/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';


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
            <FormControlLabel
              control={(
                <InsertEmoticonIcon
                  color="secondary"
                  checked={selection.selected || false}
                  onChange={onChange(index)}
                />
              )}
            />
            <FormControlLabel
              control={(
                <SentimentSatisfiedIcon
                  checked={selection.selected || false}
                  onChange={onChange(index)}
                  color="secondary"
                />
              )}
            />
            <FormControlLabel
              control={(
                <SentimentVeryDissatisfiedIcon
                  checked={selection.selected || false}
                  onChange={onChange(index)}
                  color="secondary"
                />
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
          </Grid>
        </Grid>
      ))}
    </>
  );
};
