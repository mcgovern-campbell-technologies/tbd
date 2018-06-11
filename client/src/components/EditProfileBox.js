import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {
  AutoComplete,
} from './componentIndex';

class EditProfileBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }

    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user
    })
  }

  handleTextFieldChange(e) {
    const user = {...this.state.user}
    user.properties[e.target.id] = e.target.value
    this.setState({ user });
  }

  render() {
    const defaultBlurb = this.state.user.properties ? this.state.user.properties.blurb : ''
    const defaultName = this.state.user.properties ? this.state.user.properties.name : ''
    const defaultProfession = this.state.user.properties ? this.state.user.properties.profession : ''

    return (
        <Dialog
          title="Edit your profile"
          open={this.props.open}
        >
          <DialogTitle>
            Edit Your Profile
          </DialogTitle>

          <DialogContent>
            <TextField
              id="name"
              label="Name"
              defaultValue={defaultName}
              onChange={this.handleTextFieldChange}
              fullWidth={true}
              margin="normal"
            />

            <TextField
              id="profession"
              label="Profession"
              defaultValue={defaultProfession}
              onChange={this.handleTextFieldChange}
              fullWidth={true}
              margin="normal"
            />

            <TextField
              id="blurb"
              label="About Me"
              defaultValue={defaultBlurb}
              onChange={this.handleTextFieldChange}
              multiline={true}
              fullWidth={true}
              margin="normal"
            />

          </DialogContent>

          <DialogActions>
            <Button onClick={this.props.closeEditProfileBox}>Cancel</Button>
            <Button
              onClick={() => {
                this.props.updateUser(this.state.user)
                this.props.closeEditProfileBox()
              }}
            >Accept</Button>
          </DialogActions>
        </Dialog>
    );
  }
}

EditProfileBox.propTypes = {
  open: PropTypes.bool,
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  closeEditProfileBox: PropTypes.func.isRequired,
}

export default EditProfileBox;
