import React, {Component} from 'react';
import Card, {CardActions, CardContent, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import ModeEdit from 'material-ui-icons/ModeEdit';
import IconButton from 'material-ui/IconButton';
import fbLogo from '../assets/fbLogo.png';
import lnLogo from '../assets/lnLogo.png';
import { EditProfileBox } from './componentIndex';

class ProfileSideCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      editProfileBoxOpen: false,
    }
    this.openEditProfileBox = this.openEditProfileBox.bind(this)
  }

  openEditProfileBox() {
    this.setState({ editProfileBoxOpen: true });
  }

  closeEditProfileBox() {
    this.setState({ editProfileBoxOpen: false });
  }

  render () {
    const { name, email, picture, blurb } = this.props;

    const styles = {
      wrapper: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // inline: false
      },
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
          open={this.state.editProfileBoxOpen}
          closeEditProfileBox={this.closeEditProfileBox.bind(this)}
          blurb={blurb}
        />
        <Card>

          <div style={styles.headerWrapper}>
            <div className="profile-image">
              <img src={picture}/>
            </div>

            <CardHeader style={styles.header} title={name}>
              <div className="profile-position" style={styles.position}>
                <span>Skilled Machinist</span>
              </div>
            </CardHeader>

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

          <CardActions></CardActions>
        </Card>
      </div>
    )
  }
}

export default ProfileSideCard;
