import React, { Component } from 'react';
import Chip from 'material-ui/Chip';

class SkillChip extends Component {

  render() {
    const style = {
      margin: 4
    }
    return (
      <Chip 
        style={style}
      >
        { this.props.name }
      </Chip>
    )
  }
}

export default SkillChip;