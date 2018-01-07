import React, { Component } from 'react';
import PropTypes from 'prop-types'

/* Material Components */
import
  Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Input from 'material-ui/Input';

/* Rxjs */
import { ajax } from 'rxjs/observable/dom/ajax';
import { Subject } from 'rxjs';

// import _ from 'lodash';
import { removeCollectionValues } from '../utils/collectionUtils';

/* Custom components */
import {
  AutoComplete,
  SkillChip
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
              multiline={false}
              fullWidth={true}
              margin="normal"
            ></TextField>

            <TextField
              id="profession"
              label="Profession"
              defaultValue={defaultProfession}
              onChange={this.handleTextFieldChange}
              multiline={false}
              fullWidth={true}
              margin="normal"
            ></TextField>

            <TextField
              id="blurb"
              label="About Me"
              defaultValue={defaultBlurb}
              onChange={this.handleTextFieldChange}
              multiline={true}
              fullWidth={true}
              margin="normal"
            ></TextField>

          </DialogContent>

          <DialogActions>
            <Button
              onClick={() => {
                this.props.closeEditProfileBox()
              }}
            >Cancel</Button>
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
