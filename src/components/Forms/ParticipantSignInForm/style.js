import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/CombinLogos.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  signInContainer: {
    background: '#F2F3F3',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardDetails: {
    flex: 1,
    width: theme.spacing(11),
    textAlign: 'center',
  },
  cardMedia: {
    margin: 'auto',
    height: theme.spacing(25),
    width: theme.spacing(25),
  },
}));

export default useStyles;
