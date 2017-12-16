import React, { Component } from 'react';
import Card, { CardActions, CardHeader, CardMedia, CardTitle, CardText, CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
// import ContentAdd from 'material-ui/svg-icons/content/add-circle';
// import Edit from 'material-ui/svg-icons/editor/mode-edit'
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
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
      <div className='pa2'>
        <Card>
          <CardHeader
            title='Skills'
            action={
              <IconButton 
                onClick={this.props.openEditSkillsBox}
              >
                <ModeEdit/>
              </IconButton>
            }
          />
          <CardContent>
            <div className='pa1'>
              { this.props.children }
            </div>
          </CardContent>
          <CardActions>
            <Button>
              <Chip
                label={'more'}
              />
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default ProfileSkillWrapper;
