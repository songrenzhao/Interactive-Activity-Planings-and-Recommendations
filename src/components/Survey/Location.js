import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css';

export default function Location() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Places you want to go for this month (choose 4).
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Gamestop"
                    src="/images/place/gamestop.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Gamestop
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Target"
                    src="/images/place/target.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Target
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="BestBuy"
                    src="/images/place/bestbuy.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Best Buy
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Walmart"
                    src="/images/place/walmart.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Walmart
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="samsung"
                    src="/images/place/samsung_store.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                SamSung Store
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="AppleStore"
                    src="/images/place/applestore.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Apple Store
              </Grid>
            )}
          />
        </Grid>

      </Grid>
    </>
  );
}
