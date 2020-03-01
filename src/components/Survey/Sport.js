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
              <>
                <img
                  alt="baseball"
                  src="/images/Sport/baseball.png"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Baseball
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <>
                <img
                  alt="Basketball"
                  src="/images/Sport/Basketball.gif"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Basketball
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <>
                <img
                  alt="Football"
                  src="/images/Sport/Football.png"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Football
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <>
                <img
                  alt="Hockey"
                  src="/images/Sport/Hockey.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Hockey
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <>
                <img
                  alt="skateboarding"
                  src="/images/Sport/skateboarding.png"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                skateboarding
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <>
                <img
                  alt="Soccer"
                  src="/images/Sport/Soccer.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Soccer
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <>
                <img
                  alt="Swimming"
                  src="/images/Sport/Swimming.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Swimming
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <>
                <img
                  alt="Tennis"
                  src="/images/Sport/Tennis.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Tennis
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            // eslint-disable-next-line max-len
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label={(
              <>
                <img
                  alt="Track_filed"
                  src="/images/Sport/Track_filed.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Track&filed
              </>
            )}
          />
        </Grid>

      </Grid>
    </>
  );
}
