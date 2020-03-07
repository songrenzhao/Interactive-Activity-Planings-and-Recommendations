import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Location(prop) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Places you want to go for this month (choose 4).
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="Gamestop" />}
            onChange={prop.onChange}
            label={(
              <>
                <img
                  alt="Gamestop"
                  src="/images/place/gamestop.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Gamestop
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="Target" />}
            onChange={prop.onChange}
            label={(
              <>
                <img
                  alt="Target"
                  src="/images/place/target.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Target
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="BestBuy" />}
            onChange={prop.onChange}
            label={(
              <>
                <img
                  alt="BestBuy"
                  src="/images/place/bestbuy.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Best Buy
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="Walmart" />}
            onChange={prop.onChange}
            label={(
              <>
                <img
                  alt="Walmart"
                  src="/images/place/walmart.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Walmart
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="samsung" />}
            onChange={prop.onChange}
            label={(
              <>
                <img
                  alt="samsung"
                  src="/images/place/samsung_store.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Samsung Store
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="location" value="AppleStore" />}
            onChange={prop.onChange}
            label={(
              <>
                <img
                  alt="AppleStore"
                  src="/images/place/applestore.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Apple Store
              </>
            )}
          />
        </Grid>

      </Grid>
    </>
  );
}
