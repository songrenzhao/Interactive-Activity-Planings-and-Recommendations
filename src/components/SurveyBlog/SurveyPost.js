import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function SurveyPost(prop) {
  const { path } = useRouteMatch();
  const { name, date } = prop;
  const displayDate = new Date(parseInt(date, 10)).toString();
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`${path}/table?query=${name}&createdAt=${parseInt(date, 10) - 1}`}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="Participant Name">
                {name}
              </Typography>
              <Typography variant="Date" paragraph>
                {displayDate}
              </Typography>
              <Typography variant="Detail" color="primary" button component="a" href="/table">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
