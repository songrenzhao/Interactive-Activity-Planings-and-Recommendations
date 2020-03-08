import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Art(prop) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Arts & Craft you want to choose for this month.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="Beading" />}
            onChange={prop.onChange}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="beading"
                    src="/images/art_craft/beading.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Beading
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="clay modeling" />}
            onChange={prop.onChange}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="clay modeling"
                    src="/images/art_craft/clay_modeling.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Clay Modeling
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="coloring" />}
            onChange={prop.onChange}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="coloring"
                    src="/images/art_craft/coloring.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Coloring
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="Crochet" />}
            onChange={prop.onChange}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Crochet"
                    src="/images/art_craft/crochet.png"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Crochet
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="drawing" />}
            onChange={prop.onChange}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="drawing"
                    src="/images/art_craft/drawing.png"
                    className="profile-img"
                    width="150px"
                    heightDrawing="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Drawing
              </Grid>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="Painting" />}
            onChange={prop.onChange}
            label={(
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <img
                    alt="Painting"
                    src="/images/art_craft/Painting.jpg"
                    className="profile-img"
                    width="150px"
                    height="150px"
                    style={{ marginRight: '5px' }}
                  />
                </Grid>
                Painting
              </Grid>
            )}
          />
        </Grid>

      </Grid>
    </>
  );
}
