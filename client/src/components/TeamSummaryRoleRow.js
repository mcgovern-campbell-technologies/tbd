import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TableCell, TableRow } from 'material-ui/Table';
import ModeEdit from 'material-ui-icons/ModeEdit';
import IconButton from 'material-ui/IconButton'

export default class TeamSummaryRoleRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    }
  }

  mouseOver() {
    this.setState({ hovering: true })
  }

  mouseOut() {
    this.setState({ hovering: false } )
  }

  render() {
    const { node, handleEditButtonClick } = this.props;
    const { id, type, skillLevel, weekDays, time, requested, filled } = node
    return (
      <TableRow 
        onMouseOver={this.mouseOver.bind(this)}
        onMouseOut={this.mouseOut.bind(this)}
        key={id}
      >
        <TableCell>{type} - {skillLevel}</TableCell>
        <TableCell>{skillLevel}</TableCell>
        <TableCell>{weekDays}</TableCell>
        <TableCell>{time}</TableCell>
        <TableCell>{requested}</TableCell>
        <TableCell>{filled}</TableCell>
        <TableCell>
          <IconButton
            disabled={!this.state.hovering}
            onClick={handleEditButtonClick}
          >
            <ModeEdit />
          </IconButton> 
          
        </TableCell>
      </TableRow>
    );
  }
}

TeamSummaryRoleRow.propTypes = {
  node: PropTypes.object.isRequired,
  handleEditButtonClick: PropTypes.func.isRequired,
}