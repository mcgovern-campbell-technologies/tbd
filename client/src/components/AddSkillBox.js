import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';

import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable, Subject } from 'rxjs';

import _ from 'lodash';

import { removeCollectionValues } from '../utils/collectionUtils';

class AddSkillBox extends Component {

  constructor(props) {
    super(props);

    this.skillListInput$ = this.createSkillListInput$();

    this.skillListInputSubscription = this.skillListInput$
      .subscribe(skills => 
        this.setState({ skillsList: skills })
      )

    this.state = {
      skillsList: [],
      newSkillIsValid: false,
      newSkill: {
        name: undefined
      }
    }

    this.handleAutoCompleteUpdateInput = this.handleAutoCompleteUpdateInput.bind(this);
    this.handleAutoCompleteNewRequest = this.handleAutoCompleteNewRequest.bind(this);
    this.handleAddSkill = this.handleAddSkill.bind(this);

    this.actions = [
      <FlatButton
        onClick={props.closeAddSkillBox}
        label="Cancel"
      />,
      <FlatButton
        label="Add"
        onClick={this.handleAddSkill}
      />,
    ];

  }

  createSkillListInput$() {
    const skillListInput = new Subject()
      .throttleTime(300)
      .concatMap(value => 
        ajax.get(`/api/skill?queryString=${value}`)
          .takeUntil(skillListInput)
      )
      .map(({ response }) => removeCollectionValues(response, this.props.skills));

    return skillListInput;
  }

  handleAutoCompleteUpdateInput(value) {
    this.skillListInput$.next(value);
  }

  handleAutoCompleteNewRequest(value) {
    this.setState({ newSkill: { ...this.state.newSkill, name: value }})
    this.setState({ newSkillIsValid: _.includes(this.state.skillsList, value)})
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
        actions={this.actions}
      >
        <div style={{}}>
          <AutoComplete 
            id="skillName"
            dataSource={this.state.skillsList}
            onUpdateInput={this.handleAutoCompleteUpdateInput}
            onNewRequest={this.handleAutoCompleteNewRequest}
          />
          <p>{this.state.newSkillIsValid? "valid" : "invalid" }</p>
        </div>
      </Dialog>
    );
  }
}

export default AddSkillBox;