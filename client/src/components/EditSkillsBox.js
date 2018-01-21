import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

import _ from 'lodash'
 
// import _ from 'lodash';
import { removeCollectionValues } from '../utils/collectionUtils';

/* Custom components */
import { 
  Autocomplete,
  SkillChip
} from './componentIndex';

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
              url={'/api/skill'}
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