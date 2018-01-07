import React, { Component } from 'react';
import PropTypes from 'prop-types';

import  
  Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

class EditCertificationBox extends Component {
  render() {
    const { open, closeEditCertificationBox, node } = this.props;
    
    return (
      <Dialog 
        open={open}
      >
        <DialogTitle>
          Edit Your Certifaction
        </DialogTitle>
        <DialogContent>
          <div>
            <Typography>
              { node.name }
            </Typography>
          </div>
          <div>
            <Typography>
              { node.institution }
            </Typography>
          </div>
          <div>
            <Typography>
              { node.location }
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeEditCertificationBox}
          >
            Press Me
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

EditCertificationBox.propTypes = {
  closeEditCertificationBox: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default EditCertificationBox;