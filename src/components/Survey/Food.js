import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css';

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
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Subway"
                    src="/images/Food/subway.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Subway
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="food" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Mcdonalds"
                    src="/images/Food/mcdonalds.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Mcdonalds
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="food" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Popeyes"
                    src="/images/Food/popeyes.png"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Popeyes
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="food" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="wendys"
                    src="/images/Food/wendys.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                wendys
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="food" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="burgerking"
                    src="/images/Food/burgerking.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Burger King
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="food" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Pizza"
                    src="/images/Food/pizza.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Pizza
              </Grid>
            )}
          />
        </Grid>

      </Grid>
    </>
  );
}
