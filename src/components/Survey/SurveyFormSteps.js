/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export const SurveyFormSteps = ({ dataForm, onChange }) => {
  const { description, selections } = dataForm;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {description}
      </Typography>
      {selections.map((selection, index) => (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={selection.selected || false}
                  onChange={onChange(index)}
                  color="secondary"
                  name="art"
                  value="Beading"
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
