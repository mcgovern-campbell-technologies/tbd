import React from 'react';
import Divider from '@material-ui/core/Divider';

import RoleSummary from './roleSummary';
import MemberList from './memberList';

const MemberPanel = () => (
  <div className="flex-3 ml3 mr3 flex flex-column">
    <RoleSummary />
    <Divider />
    <MemberList />
  </div>
)

export default MemberPanel;
