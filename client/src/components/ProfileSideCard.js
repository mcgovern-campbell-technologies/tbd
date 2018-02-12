import React, {Component} from 'react';
import Card, {CardActions, CardContent, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ModeEdit from 'material-ui-icons/ModeEdit';
import IconButton from 'material-ui/IconButton';
import { EditProfileBox } from './componentIndex';
import { WeekDayPicker } from '../containers/containerIndex';

class ProfileSideCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      editProfileBoxOpen: false,
    }
    this.openEditProfileBox = this.openEditProfileBox.bind(this)
    this.closeEditProfileBox = this.closeEditProfileBox.bind(this)
  }

  openEditProfileBox() {
    this.setState({ editProfileBoxOpen: true });
  }

  closeEditProfileBox() {
    this.setState({ editProfileBoxOpen: false });
  }

  render () {
    const { name, email, picture, blurb, profession } = this.props.user.properties;

    const styles = {
      actionIcon: {
        float: 'right',
      },
      profilePosition: {
        display: 'inline-block',
        verticalAlign: 'top',
        whiteSpace: 'normal',
        paddingRight: '90px'
      },
      headerWrapper: {
        display: 'flex'
      },
      header: {
        flexGrow: '1'
      },
      position: {
        paddingLeft: '16px'
      }
    }

    return (
      <div>
        <EditProfileBox
          user={this.props.user}
          open={this.state.editProfileBoxOpen}
          updateUser={this.props.updateUser}
          closeEditProfileBox={this.closeEditProfileBox}
        />
        <Card>

          <div style={styles.headerWrapper}>
            <div className="profile-image">
              <img src={picture}/>
            </div>

            <CardHeader style={styles.header} title={name} subheader={profession} />

            <IconButton onClick={this.openEditProfileBox} style={styles.actionIcon}>
              <ModeEdit/>
            </IconButton>
          </div>

          <CardContent>
            <div>

              <div>
                {blurb}
              </div>

              <div className="divider"></div>
            </div>
          </CardContent>
          <WeekDayPicker />

          <CardActions></CardActions>
        </Card>
      </div>
    )
  }
}

export default ProfileSideCard;
