import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const SIGNUP_PARTICIPANT = gql`
  mutation signUpParticipant($name: String!, $picture: String) {
    signUpParticipant(name: $name, picture: $picture) {
      status
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  media: {
    height: theme.spacing(15),
    width: theme.spacing(15),
    margin: 'auto',
  },
  button: {
    marginBottom: theme.spacing(2),
  },
}));

export const FormDialog = () => {
  const [open, setOpen] = useState(false);
  const [dataForm, setDataForm] = useState({});
  const [isPicLoading, setIsPicLoading] = useState(false);
  const [signUpParticipant] = useMutation(SIGNUP_PARTICIPANT);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDataForm({});
  };

  const handleChange = (event) => {
    setDataForm({
      name: event.target.value,
    });
  };

  const uploadImage = async (e) => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'IAPRLIVE');
    setIsPicLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/iapr/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    // eslint-disable-next-line camelcase
    const { secure_url } = await res.json();
    const updatedFormData = { ...dataForm };
    // eslint-disable-next-line camelcase
    updatedFormData.url = secure_url;
    setDataForm(updatedFormData);
    console.log(dataForm);
    setIsPicLoading(false);
  };

  const handleSubmit = async () => {
    try {
      const { data } = await signUpParticipant({
        variables: {
          name: dataForm.name,
          picture: dataForm.url,
        },
      });
      const { status } = data.signUpParticipant;
      if (status) {
        console.log(`added ${dataForm.name}`);
      } else {
        console.log('failed');
      }
      setDataForm({});
      setOpen(false);
      window.location.reload();
    } catch (err) {
      throw err;
    }
  };

  return (
    <div>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <PersonAddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new participant</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="Name"
            defaultValue={dataForm.name}
            onChange={handleChange}
            fullWidth
          />
          <Button variant="outlined" color="primary" component="label" className={classes.button}>
            Upload File
            <input
              type="file"
              name="file"
              style={{ display: 'none' }}
              onChange={uploadImage}
            />
          </Button>
          {isPicLoading ? (
            <h3>Loading</h3>
          ) : (
            <CardMedia
              className={classes.media}
              image={dataForm.url}
              title="Contemplative Reptile"
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
