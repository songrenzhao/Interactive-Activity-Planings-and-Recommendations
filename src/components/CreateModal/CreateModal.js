import React from 'react';
import TextField from '@material-ui/core/TextField';
// eslint-disable-next-line import/no-unresolved
import { Button, Modal } from 'react-bootstrap';


export const CreateParticipant = () => (
  <>

    <Modal>
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
