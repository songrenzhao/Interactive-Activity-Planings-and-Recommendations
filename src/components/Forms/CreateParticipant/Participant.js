import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

const REMOVE_PARTICIPANT = gql`
  mutation removeParticipant($name: String!) {
    removeParticipant(name: $name) {
      status
    }
  }
`;

export default function SurveyPost(prop) {
  const { name } = prop;
  const [removeParticipant] = useMutation(REMOVE_PARTICIPANT);
  const classes = useStyles();

  const handleRemoveParticipant = async () => {
    try {
      const { data } = await removeParticipant({
        variables: {
          name,
        },
      });
      const { status } = data.removeParticipant;
      console.log(status);
      window.location.reload();
    } catch (err) {
      throw err;
    }
  };

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="Participant Name">
                {name}
              </Typography>
            </CardContent>
          </div>
          <IconButton color="secondary" onClick={handleRemoveParticipant}>
            <HighlightOffIcon />
          </IconButton>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
