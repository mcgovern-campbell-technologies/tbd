import React from 'react';
import { Route, Switch } from 'react-router';
import TeamDetails from './teamManager/detail';
import TeamManager from './teamManager';
import { Profile } from './containers';

export const routes = (
  <Switch>
    <Route path="/dashboard/profile" component={Profile}/>
    <Route exact path="/dashboard/teamManager" component={TeamManager} />
    <Route path="/dashboard/teamManager/:teamId" component={TeamDetails} />
    <Route path="*" component={TeamManager} />
  </Switch>
);
