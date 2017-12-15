import React, { Component } from 'react';
import Card, { CardActions, CardHeader, CardMedia, CardTitle, CardText, CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
// import ContentAdd from 'material-ui/svg-icons/content/add-circle';
// import Edit from 'material-ui/svg-icons/editor/mode-edit'
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import ModeEdit from 'material-ui-icons/ModeEdit';


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
      <Card>
        <CardHeader
          // title={<CardTitle title='Skills'/>}
        >
          <IconButton style={styles.actionIcon}>
            <ModeEdit/>
          </IconButton>
        </CardHeader>
        <CardContent>
            { this.props.children }
        </CardContent>
        <CardActions>
          <Button>
            <Chip
              label={'more'}
            />
          </Button>
          <IconButton 
            style={styles.actionIcon}
            onClick={this.props.openAddSkillBox}
          >
            <Icon>add_circle</Icon>
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default ProfileSkillWrapper;
