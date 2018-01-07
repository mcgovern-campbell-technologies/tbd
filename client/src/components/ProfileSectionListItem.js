import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

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
    const { name, location, institution } = this.props.node;
    return (
      <div className='mb2'>
        <div className='dib fl mr3'>
          <Avatar 
              style={{ height: 60, width: 60 }}
              sizes='10'
            >
            C
          </Avatar>
        </div>
        <div className='dib'>
          <Typography>
            { name }
          </Typography>
          <Typography>
            { institution }
          </Typography>
          <Typography>
            { location }
          </Typography>
        </div>
        <div className='dib fr'>
          <IconButton
            onClick={() => this.handleOpenEditBox(this.props.node)}
          >
            <ModeEdit />
          </IconButton>
          <Typography>
            when to when
          </Typography>
        </div>
      </div>
    )
  }
}

/*
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
            { this.props.title }
          </Typography>
        </div>
        <div className='fr'>
          <IconButton
            onClick={this.handleOpenEditBox}
          >
            <ModeEdit />
          </IconButton>
          <Typography>
            {`${'hellp'} - ${'goodbyes'}`}
          </Typography>
        </div>
      </div>
*/
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

