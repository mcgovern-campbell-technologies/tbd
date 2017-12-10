import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Chip from 'material-ui/Chip';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import Edit from 'material-ui/svg-icons/editor/mode-edit'
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';


class ProfileSkillWrapper extends Component {

  render() {

    const styles = {
      wrapper: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // inline: false
      },
      actionIcon: {
        float: 'right',
      }
    }

    return (
      <Card 
        showExpandableButton={true}
      >
        <CardHeader
          title={<CardTitle title='Skills'/>}
        >
          <IconButton style={styles.actionIcon}>
            <Edit/>
          </IconButton>
        </CardHeader>
        <CardMedia>
          <div style={styles.wrapper}>
            { this.props.children }
          </div>
        </CardMedia>
        <CardActions>
          {/*<Chip>
            More
            <ContentAdd />
          </Chip>*/}
          <IconButton 
            style={styles.actionIcon}
            onClick={this.props.openAddSkillBox}
          >
            <ContentAdd />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default ProfileSkillWrapper;
