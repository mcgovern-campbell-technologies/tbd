import React from 'react';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import PropTypes from 'prop-types'

function TeamManagerWrapper({ children, openAddTeamBox }) {
  return (
    <div>
      {
        children
      }
      <Button
        fab mini
        aria-label="add"
        className='fr'
        onClick={openAddTeamBox}
      >
        <AddIcon />
      </Button>
    </div>
  )
}

TeamManagerWrapper.propTypes = {
  openAddTeamBox: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default TeamManagerWrapper
