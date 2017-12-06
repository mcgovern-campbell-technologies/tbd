import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton';

class AddSkillBox extends Component {

  constructor(props) {
    super(props);
    this.actions = [
      <FlatButton
        onClick={props.closeAddSkillBox}
        label="Cancel"
      />,
      <FlatButton
        label="Add"
        onClick={props.addSkill}
      />,
    ];
  }


  render() {
    return (
      <Dialog
        title="Add a Skill"
        open={this.props.open}
        actions={this.actions}
      />
    );
  }
}

export default AddSkillBox;