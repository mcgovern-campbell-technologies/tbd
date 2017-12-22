import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import ModeEdit from 'material-ui-icons/ModeEdit';

class ProfileSectionListItem extends Component {

  constructor(props) {
    super(props);

    this.handleOpenEditBox = this.handleOpenEditBox.bind(this)
  }

  handleOpenEditBox() {
    this.props.openEditBox(this.props.node);
  }
  render() {
    return (
      <div>
        <div className='fl ph2'>
          <Avatar 
            style={{ height: 70, width: 70 }}
            sizes='10'
          >
            C
          </Avatar>
        </div>
        <div className='fl'>
          <Typography>
            What about here
          </Typography>
        </div>
        <div className='fr'>
          <IconButton
            onClick={this.handleOpenEditBox}
          >
            <ModeEdit />
          </IconButton>
          <Typography>
            Date
          </Typography>
        </div>
      </div>
    )
  }
}

ProfileSectionListItem.propTypes = {
  title: PropTypes.string,
  institution: PropTypes.string,
  location: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  logo: PropTypes.string,
  identity: PropTypes.string,
  openEditBox: PropTypes.func,
  node: PropTypes.object,
}

export default ProfileSectionListItem;

