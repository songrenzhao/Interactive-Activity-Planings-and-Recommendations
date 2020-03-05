import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Performing() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Performing art you want to choose for this month.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="performing" value="yes" />}
            label={(
              // eslint-disable-next-line react/jsx-no-comment-textnodes
              <>
                <img
                  alt="dancing"
                  src="/images/performing_art/dancing.gif"
                  className="profile-img"
                  width="150px"
                  height="150px"
                  style={{ marginRight: '5px' }}
                />
                Dancing
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="performing" value="yes" />}
            label={(
              <>
                <img
                  alt="theater"
                  src="/images/performing_art/theater.gif"
                  className="profile-img"
                  width="150px"
                  height="150px"
                  style={{ marginRight: '5px' }}
                />
                Theater
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="performing" value="yes" />}
            label={(
              <>
                <img
                  alt="music"
                  src="/images/performing_art/music.png"
                  className="profile-img"
                  width="150px"
                  height="150px"
                  style={{ marginRight: '5px' }}
                />
                Music
              </>
            )}
          />
        </Grid>

      </Grid>
    </>
  );
}
