import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  FormGrid: {
    padding: theme.spacing(2),
  },
  selectionFormGrid: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '40%',
    },
    '& .MuiButton-root': {
      marginTop: theme.spacing(3.5),
      marginBottom: theme.spacing(8),
      width: '40%',
      marginRight: theme.spacing(8),
    },
    padding: theme.spacing(5),
    margin: theme.spacing(1),
    display: 'flex',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  media: {
    height: theme.spacing(15),
    width: theme.spacing(15),
  },
  defaultButton: {
    marginTop: '20px',
    marginLeft: '40%',
    width: '20%',
  },
  buttonSuccess: {
    marginTop: '20px',
    marginLeft: '40%',
    width: '20%',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonFail: {
    marginTop: '20px',
    marginLeft: '40%',
    width: '20%',
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -4,
    marginLeft: -12,
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
}));

export default useStyles;
