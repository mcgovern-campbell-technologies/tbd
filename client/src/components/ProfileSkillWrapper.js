import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

class ProfileSkillWrapper extends Component {

  render() {

    const styles = {
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      }
    }

    return (
      <Card 
        showExpandableButton={true}
      >
        <CardHeader
          title="Skills"
        />
        <CardMedia>
          <div style={styles.wrapper}>
            { this.props.children }
          </div>
        </CardMedia>
        <CardActions>
          <FloatingActionButton
            onClick={this.props.openAddSkillBox}
          >
            <ContentAdd/>
          </FloatingActionButton>
        </CardActions>
      </Card>
    )
  }
}

export default ProfileSkillWrapper;