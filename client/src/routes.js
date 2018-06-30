import React from 'react';
import { Route, Switch } from 'react-router';
import TeamDetails from './teamManager/detail';
import TeamManager from './teamManager';
import { Profile } from './containers';
import AddMember from './teamManager/addMember';

export const routes = (
  <Switch>
    <Route path="/dashboard/profile" component={Profile}/>
    <Route exact path="/dashboard/teamManager" component={TeamManager} />
    <Route exact path="/dashboard/teamManager/:teamId" component={TeamDetails} />
    <Route path="/dashboard/teamManager/:teamId/addmember" component={AddMember} />
    <Route path="*" component={TeamManager} />
  </Switch>
);
