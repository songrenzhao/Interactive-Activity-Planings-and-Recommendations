import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const SIGNUP_PARTICIPANT = gql`
  mutation signUpParticipant($name: String!) {
    signUpParticipant(name: $name) {
      status
    }
  }
`;

export const FormDialog = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [signUpParticipant] = useMutation(SIGNUP_PARTICIPANT);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName('');
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const { data } = await signUpParticipant({
        variables: {
          name,
        },
      });
      const { status } = data.signUpParticipant;
      if (status) {
        console.log(`added ${name}`);
      } else {
        console.log('failed');
      }
      setName('');
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
            defaultValue={name}
            onChange={handleChange}
            fullWidth
          />
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
