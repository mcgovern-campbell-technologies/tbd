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

class EditSkillsBox extends Component {

  constructor(props) {
    super(props);

    this.skillListInput$ = this.createSkillListInput$();

    this.skillListInputSubscription = this.skillListInput$
      .subscribe(skills => 
        this.setState({ skillsList: skills })
      )

    this.state = {
      skillList: [],
      newSkillIsValid: false,
      newSkill: {
        name: ''
      }
    }

    this.updateNewSkillName = this.updateNewSkillName.bind(this);
    this.fetchNewSkillList = this.fetchNewSkillList.bind(this);
    this.clearSkillList = this.clearSkillList.bind(this);
    this.handleAddSkill = this.handleAddSkill.bind(this);

  }

  createSkillListInput$() {
    const skillListInput = new Subject()
      .throttleTime(300)
      .concatMap(value => 
        ajax.get(`/api/skill?queryString=${value}`)
          .takeUntil(skillListInput)
      )
      .map(({ response }) => 
        removeCollectionValues(response, this.props.skills)

      );

    return skillListInput;
  }

  updateNewSkillName(newValue) {
    this.setState({ newSkill: { ...this.state.newSkill, name: newValue }});
  }

  fetchNewSkillList(value) {
    this.skillListInput$.next(value);
  }
  clearSkillList(value) {
    this.setState({ skillList: [] });
  }

  handleAddSkill() {
    if (this.state.newSkillIsValid) {
      this.props.addSkill(this.state.newSkill, this.props.identity)
    }
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
                  key={identity}
                  handleRequestDelete={() => console.log('requesting delete')}
                />
              )
            }
            <Chip
              label={<Input/>}
            />
            {/*<AutoComplete
              suggestions={this.state.skillList}
              inputValue={this.state.newSkill.name}
              fetchSuggestions={this.fetchNewSkillList}
              clearSuggestions={this.clearSkillList}
              updateInput={this.updateNewSkillName}
            />*/}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                console.log(this.props.closeAddSkillBox)
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