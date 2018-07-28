import React from 'react';
import Divider from '@material-ui/core/Divider';

import RoleSummary from './roleSummary';
import MemberList from './memberList';

const MemberPanel = ({ role }) => (
  <div className="flex-3 ml3 mr3 flex flex-column">
    <RoleSummary role={role} />
    <Divider />
    <MemberList />
  </div>
)

export default MemberPanel;
