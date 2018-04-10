import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';

//Actions
import * as actionCreators from '../redux/actions/actionCreators';

import {

} from './containerIndex';

import {
  TeamManagerWrapper,
  AddTeamBox,
} from './../components/componentIndex';

class TeamManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AddTeamBoxOpen: false,
    }

    this.toggleAddTeamBox = this.toggleAddTeamBox.bind(this)
    this.handleAddTeam = this.handleAddTeam.bind(this)
  }

  componentWillMount() {
    this.props.getAllTeams()
  }

  toggleAddTeamBox() {
    this.setState({AddTeamBoxOpen: !this.state.AddTeamBoxOpen})
  }

  handleAddTeam(team) {
    this.props.addTeam(team)
  }

  handleRowClick(teamId) {
    this.props.history.push(`/dashboard/teamManager/${teamId}`)
  }

  render() {
    return (
      <TeamManagerWrapper
        openAddTeamBox={this.toggleAddTeamBox}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Filled</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.teams.allTeams.map(team => {
              return (
                <TableRow key={team.identity} onClick={()=>{this.handleRowClick(team.identity)}} >
                  <TableCell>{team.properties.name}</TableCell>
                  <TableCell>{team.properties.projectName}</TableCell>
                  <TableCell>{team.properties.startDate}</TableCell>
                  <TableCell>{team.properties.endDate}</TableCell>
                  <TableCell>3/34</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <AddTeamBox
          getAllProjects={this.props.getAllProjects}
          open={this.state.AddTeamBoxOpen}
          closeAddTeamBox={this.toggleAddTeamBox}
          handleAddTeam={this.handleAddTeam}
          projects={this.props.projects.allProjects}
        />
      </TeamManagerWrapper>
    )
  }
}

function mapStateToProps({projects, teams}) {
  return {projects, teams}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamManager))
