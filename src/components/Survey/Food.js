import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Food() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Food you want to have for this month (choose 4).
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="yes" />}
            label="Subway"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Food" value="yes" />}
            label="McDonalds"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Food" value="yes" />}
            label="Popeyes"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Food" value="yes" />}
            label="Wendy’s"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Food" value="yes" />}
            label="Burger King"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="Food" value="yes" />}
            label="Pizza"
          />
        </Grid>

      </Grid>
    </>
  );
}
