import React, { Component } from 'react';
import  
  Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
}from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
// import AutoComplete from 'material-ui/Autocomplete';


import { ajax } from 'rxjs/observable/dom/ajax';
import { Subject } from 'rxjs';

import _ from 'lodash';

import { removeCollectionValues } from '../utils/collectionUtils';

import { AutoComplete } from './componentIndex';

class AddSkillBox extends Component {

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
      >
        <DialogTitle> 
          Add a Skill
        </DialogTitle>
        <DialogContent>

          <AutoComplete
            suggestions={this.state.skillList}
            inputValue={this.state.newSkill.name}
            fetchSuggestions={this.fetchNewSkillList}
            clearSuggestions={this.clearSkillList}
            updateInput={this.updateNewSkillName}
          />
          <Typography>{this.state.newSkillIsValid? "valid" : "invalid" }</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.props.closeAddSkillBox}
          >Cancel</Button>
          <Button
            onClick={this.handleAddSkill}
          >Add</Button>
        </DialogActions>
      </Dialog>
    );
  }
}


export default AddSkillBox;