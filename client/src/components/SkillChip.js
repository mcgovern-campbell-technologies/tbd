import React  from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

function SkillChip (props) {
  const { name, handleRequestDelete, identity } = props;

  return (
    <div className='dib pv2 pr1'>
      <Chip
        label={name}
        onRequestDelete={
          handleRequestDelete? 
            () => {
              handleRequestDelete(identity)
            } : null
        }
      />
    </div>
  )
}

SkillChip.propTypes = {
  name: PropTypes.string.isRequired,
  handleRequestDelete: PropTypes.func,
  identity: PropTypes.string,
}

export default SkillChip;