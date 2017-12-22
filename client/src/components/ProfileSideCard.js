import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import ModeEdit from 'material-ui-icons/ModeEdit';
import IconButton from 'material-ui/IconButton';
import fbLogo from '../assets/fbLogo.png';
import lnLogo from '../assets/lnLogo.png';

function ProfileSideCard(props) {
  const { name, email, picture, blurb } = props;

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
    <Card>
      <div style={styles.headerWrapper}>
        <div className="profile-image">
          <img src={picture}/>
        </div>
        <CardHeader style={styles.header} title={<CardTitle title={name}/>}>
          <IconButton style={styles.actionIcon}>
            <ModeEdit/>
          </IconButton>
          <div className="profile-position" style={styles.position}>
            <span>Skilled Machinist</span>
          </div>
        </CardHeader>
      </div>
      <CardMedia>
        <div>

          <div>
            {blurb}
          </div>

          {/* <div className="divider"></div> */}
        </div>
      </CardMedia>
      <CardActions>
      </CardActions>
    </Card>
  );
}

export default ProfileSideCard;
