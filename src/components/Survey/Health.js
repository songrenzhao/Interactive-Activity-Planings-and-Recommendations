import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Health() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Health and Fitness you want to choose for this month (choose 4).
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="health" value="yes" />}
            label={(
              <>
                <img
                  alt="Exercising"
                  src="/images/health_fitness/exercising.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Exercising
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="health" value="yes" />}
            label={(
              <>
                <img
                  alt="Health Cooking Class"
                  src="/images/health_fitness/health_cooking_class.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Health Cooking Class
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="health" value="yes" />}
            label={(
              <>
                <img
                  alt="Meditation"
                  src="/images/health_fitness/Meditation.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Meditation
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="health" value="yes" />}
            label={(
              <>
                <img
                  alt="yoga_zumba"
                  src="/images/health_fitness/yoga_zumba.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Yoga/Zumba
              </>
            )}
          />
        </Grid>

      </Grid>
    </>
  );
}
