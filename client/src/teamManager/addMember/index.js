import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import TeamPanel from './teamPanel';
import MemberPanel from './memberPanel';
import SearchMember from './searchMember';
import ResourceList from './resourceList';

const AddMember = ({ team, onSelectRole }) => (
  <div>
    <div className="pr8">
      <SearchMember />
      <p className="mb4">1200 matched your criteria</p>
      <ResourceList />
    </div>
    <div className="pt5 pb2 fixed top-0 right-0 bottom-0 flex flex-column border-l w6">
      <h3 className="pl3">Team A</h3>
      <div className="flex h-100">
        <TeamPanel roles={team.roles} onSelectRole={onSelectRole}/>
        <MemberPanel roles={team.roles} />
      </div>
    </div>
  </div>
)

function mapStateToProps({team}) {
  return {team}
}

export default withRouter(connect(mapStateToProps)(AddMember))
