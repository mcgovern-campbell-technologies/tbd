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

import { Autocomplete } from './componentIndex';
const DOMAIN = window.location.host || 'localhost'

class EditCertificationBox extends Component {

  render() {
    const {
      open,
      closeEditCertificationBox,
      node,
      edit,
      handleEditCertificationFields,
      handleAddCertification,
    } = this.props;
    const { name, institution, location } = node.properties;
    return (
      <Dialog
        open={open}
      >
        <DialogTitle>
          {
            edit ? (
              'Edit Your Certification'
            ) : (
              'Add a Certification'
            )
          }
        </DialogTitle>
        <DialogContent>
          {
            edit ? (
              <Typography>
                { name }
              </Typography>
            ) : (
              <Autocomplete
                url={`http://${DOMAIN}:4000/api/certification`}
                handleSelection={handleEditCertificationFields('name')}
                placeholder={'Certification name'}
              />
            )
          }
          <form>
            <div className='mb1'>
              <TextField
                label="Institution"
                type="text"
                onChange={handleEditCertificationFields('institution')}
                value={institution}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <TextField
                label="date"
                type="date"
                onChange={handleEditCertificationFields('date')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeEditCertificationBox}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleAddCertification()
              closeEditCertificationBox()
            }}
          >
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

EditCertificationBox.propTypes = {
  closeEditCertificationBox: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  edit: PropTypes.bool,
}

export default EditCertificationBox;
