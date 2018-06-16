import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  infoTitle: {
    fontWeight: 'bold'
  },
  leftBar: {
    padding: 16,
    backgroundColor: 'lightgrey',
    height: '100%',
    flex: '1 0 200px',
    margin: '0 10px 0 0',
  },
  leftBarSection: {
    marginTop: '20px',
  },
};

function TeamSummaryBox (props) {
  // TODO: Fix all this.
  const teamName = props.team.properties ? props.team.properties.name : '';
  const locationName = props.location.properties ? props.location.properties.name : '';
  const projectName = props.project.properties ? props.project.properties.name : '';
  const startDate = props.team.properties ? props.team.properties.startDate : '';
  const endDate = props.team.properties ? props.team.properties.endDate : '';

  return (
    <Paper className={props.classes.leftBar}>
      <Typography type='title'>
        {teamName}
      </Typography>

      <section className={props.classes.leftBarSection}>
        <Typography component='p' className={props.classes.infoTitle}>Project:</Typography>
        <Typography component='p'>{projectName}</Typography>
      </section>

      <section className={props.classes.leftBarSection}>
        <Typography component='p' className={props.classes.infoTitle}>Location:</Typography>
        <Typography component='p'>{locationName}</Typography>
      </section>

      <section className={props.classes.leftBarSection}>
        <Typography component='p' className={props.classes.infoTitle}>Start Date:</Typography>
        <Typography component='p'>{startDate}</Typography>
      </section>

      <section className={props.classes.leftBarSection}>
        <Typography component='p' className={props.classes.infoTitle}>End Date:</Typography>
        <Typography component='p'>{endDate}</Typography>
      </section>

    </Paper>
  )
}

export default withStyles(styles)(TeamSummaryBox);
