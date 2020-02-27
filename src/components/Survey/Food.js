import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Food() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Food you want to have for this month.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="food" value="yes" />}
            label={(
              <>
                <img
                  alt="Subway"
                  src="/images/Food/subway.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Subway
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="food" value="yes" />}
            label={(
              <>
                <img
                  alt="Mcdonalds"
                  src="/images/Food/mcdonalds.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Mcdonalds
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="food" value="yes" />}
            label={(
              <>
                <img
                  alt="Popeyes"
                  src="/images/Food/popeyes.png"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Popeyes
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="food" value="yes" />}
            label={(
              <>
                <img
                  alt="wendys"
                  src="/images/Food/wendys.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                wendys
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="food" value="yes" />}
            label={(
              <>
                <img
                  alt="burgerking"
                  src="/images/Food/burgerking.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Burger King
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="food" value="yes" />}
            label={(
              <>
                <img
                  alt="Pizza"
                  src="/images/Food/pizza.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Pizza
              </>
            )}
          />
        </Grid>

      </Grid>
    </>
  );
}
