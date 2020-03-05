import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Sport() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Sports you want to choose for this month.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="baseball"
                    src="/images/Sport/baseball.png"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Baseball
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Basketball"
                    src="/images/Sport/Basketball.gif"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Basketball
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Football"
                    src="/images/Sport/Football.png"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Football
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Hockey"
                    src="/images/Sport/Hockey.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Hockey
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="skateboarding"
                    src="/images/Sport/skateboarding.png"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Skateboarding
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Soccer"
                    src="/images/Sport/Soccer.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Soccer
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Swimming"
                    src="/images/Sport/Swimming.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Swimming
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Tennis"
                    src="/images/Sport/Tennis.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Tennis
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            // eslint-disable-next-line max-len
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Track_field"
                    src="/images/Sport/Track_filed.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Track&Field
              </Grid>
            )}
          />
        </Grid>

      </Grid>
    </>
  );
}
