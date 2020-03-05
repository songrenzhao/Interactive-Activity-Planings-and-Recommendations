import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Health() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Health and Fitness you want to choose for this month.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="health" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Exercising"
                    src="/images/health_fitness/exercising.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Exercising
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="health" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Health Cooking Class"
                    src="/images/health_fitness/health_cooking_class.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Health Cooking Class
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="health" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Meditation"
                    src="/images/health_fitness/Meditation.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Meditation
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="health" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="yoga_zumba"
                    src="/images/health_fitness/yoga_zumba.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Yoga/Zumba
              </Grid>
            )}
          />
        </Grid>

      </Grid>
    </>
  );
}
