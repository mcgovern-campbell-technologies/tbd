import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Chip from 'material-ui/Chip';

class SkillChip extends Component {

  render() {
    return (
      <div className='dib pv2 pr1'>
        <Chip
          label={this.props.name}
          onRequestDelete={this.props.handleRequestDelete}
        />
      </div>
    )
  }
}

SkillChip.propTypes = {
  name: PropTypes.string.isRequired,
  handleRequestDelete: PropTypes.func,
}

export default SkillChip;