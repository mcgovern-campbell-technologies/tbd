import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function TeamSummaryBox (props) {
  // TODO: Fix all this.
  const teamName = props.team.properties ? props.team.properties.name : '';
  const locationName = props.location.properties ? props.location.properties.name : '';
  const projectName = props.project.properties ? props.project.properties.name : '';
  const startDate = props.team.properties ? props.team.properties.startDate : '';
  const endDate = props.team.properties ? props.team.properties.endDate : '';

  return (
    <Paper className="pa3 mr3 w5 flex-shrink-0">
      <section className="mb3">
        <Typography variant="headline" component="h3">
          {teamName}
        </Typography>
      </section>

      <section className="mb4">
        <Typography component='p'>Project: {projectName}</Typography>
        <Typography component='p'>Location: {locationName}</Typography>
      </section>

      <section className="mb4">
        <Typography component='p'>Start Date: {startDate}</Typography>
        <Typography component='p'>End Date: {endDate}</Typography>
      </section>

      <section>
        <Typography component='p'>Status: Building</Typography>
        <Typography component='p'>Requested: 4/23</Typography>
        <Typography component='p'>Filled: 12/23</Typography>
      </section>

    </Paper>
  )
}

export default TeamSummaryBox;
