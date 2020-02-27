import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Art() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Arts & Craft you want to choose for this month (choose 4).
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="yes" />}
            label={(
              <>
                <img
                  alt="beading"
                  src="/images/art_craft/beading.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Beading
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="yes" />}
            label={(
              <>
                <img
                  alt="clay modeling"
                  src="/images/art_craft/clay_modeling.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Clay Modeling
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="yes" />}
            label={(
              <>
                <img
                  alt="coloring"
                  src="/images/art_craft/coloring.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Coloring
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="yes" />}
            label={(
              <>
                <img
                  alt="Crochet"
                  src="/images/art_craft/crochet.png"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Crochet
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="yes" />}
            label={(
              <>
                <img
                  alt="drawing"
                  src="/images/art_craft/drawing.png"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Drawing
              </>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="yes" />}
            label={(
              <>
                <img
                  alt="Painting"
                  src="/images/art_craft/Painting.jpg"
                  className="profile-img"
                  width="100px"
                  height="100px"
                  style={{ marginRight: '5px' }}
                />
                Painting
              </>
            )}
          />
        </Grid>

      </Grid>
    </>
  );
}