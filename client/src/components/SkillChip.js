import React, { Component } from 'react';
import Chip from 'material-ui/Chip';

class SkillChip extends Component {

  render() {
    const styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    }
    return (
      <Chip 
        style={styles.chip}
      >
        { this.props.name }
      </Chip>
    )
  }
}

export default SkillChip;