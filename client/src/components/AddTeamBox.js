import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


class AddTeamBox extends Component {

  constructor(props) {
    super(props);


  }

  render() {
    const { closeAddTeamBox } = this.props;
    return (
      <Dialog
        open={this.props.open}
      >
        <DialogTitle>
          { 'Create Team' }
        </DialogTitle>
        <DialogContent>
          <div className="db">
            <TextField
              label="Team Name"
              type="text"
              defaultValue={''}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="db">
            <div className="mh1 dib">
              <TextField
                label="Start Date"
                type="date"
                defaultValue={''}
                fullWidth={false}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="mh1 dib">
              <TextField
                label="End Date"
                type="date"
                defaultValue={''}
                fullWidth={false}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div className="db">
            <div className="mh1 dib">
              <TextField
                label="Project Name"
                type="text"
                defaultValue={''}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="mh1 dib">
              <TextField
                label="Location"
                type="text"
                defaultValue={''}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeAddTeamBox}
          >
            CANCEL
          </Button>
          <Button
            onClick={closeAddTeamBox}
          >
            ACCEPT
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

AddTeamBox.propTypes = {
  open: PropTypes.bool.isRequired,
  closeAddTeamBox: PropTypes.func.isRequired,
}

export default AddTeamBox;