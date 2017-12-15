import React, { Component } from 'react';
import Chip from 'material-ui/Chip';

class SkillChip extends Component {

  render() {
    const style = {
      margin: 4,
      display: 'inline-block'
    }
    return (
      <Chip 
        style={style}
        label={this.props.name}
      />
    )
  }
}

export default SkillChip;