import React from 'react';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CreateModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Participant File</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="column">
              <div className="form-group col-md-4">
                <TextField
                  label="Name:"
                />
                <input
                  type="text"
                  className="form-control"
                  required
                />
              </div>

            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger">
              Cancel
            </Button>
            <input
              type="submit"
              value="Submit"
              color="primary"
              className="btn btn-primary"
            />
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
