import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import _ from 'lodash'

import {
  Autocomplete,
  SkillChip
} from './componentIndex';

const DOMAIN = window.location.host || 'localhost'

class EditSkillsBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newSkillIsValid: false,
      newSkill: {
        name: ''
      }
    }

    this.updateNewSkillName = this.updateNewSkillName.bind(this);
    this.handleAddSkill = this.handleAddSkill.bind(this);
    this.handleDeleteSkill = this.handleDeleteSkill.bind(this);

  }

  updateNewSkillName(newValue) {
    this.setState({ newSkillIsValid: !_.includes(this.props.skills, newValue)})
    this.setState({ newSkill: { ...this.state.newSkill, name: newValue }});
  }

  handleAddSkill() {
    if (this.state.newSkillIsValid) {
      this.props.addSkill(this.state.newSkill, this.props.identity)
    }
  }

  handleDeleteSkill(identity) {
    this.props.handleDeleteSkill(identity)
  }

  render() {
    return (
        <Dialog
          title="Add a Skill"
          open={this.props.open}
          className='w-two-thirds'
        >
          <DialogTitle>
            Edit Your Skills
          </DialogTitle>
          <DialogContent className='w-two-thirds'>
            {
              this.props.skills.map(({ properties, identity }) =>
                <SkillChip
                  { ...properties }
                  identity={identity}
                  key={identity}
                  handleRequestDelete={this.handleDeleteSkill}
                />
              )
            }

            <Autocomplete
              placeholder={'Whats your skill\'s name?'}
              handleSelection={this.updateNewSkillName}
              url={`http://${DOMAIN}:4000/api/skill`}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.props.closeAddSkillBox()
              }}
            >Cancel</Button>
            <Button
              disabled={!this.state.newSkillIsValid}
              onClick={this.handleAddSkill}
            >Accept</Button>
          </DialogActions>
        </Dialog>
    );
  }
}



EditSkillsBox.propTypes ={
  addSkill: PropTypes.func.isRequired,
  closeAddSkillBox: PropTypes.func.isRequired
}


export default EditSkillsBox;
