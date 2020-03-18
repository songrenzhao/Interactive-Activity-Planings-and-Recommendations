import { makeStyles } from '@material-ui/core/styles';


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
}));

export default useStyles;
