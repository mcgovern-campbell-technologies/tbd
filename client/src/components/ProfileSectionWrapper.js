import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card, { CardActions, CardHeader, CardMedia, CardTitle, CardText, CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Add from 'material-ui-icons/Add';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';


class ProfileSectionWrapper extends Component {

  expand() {
    this.setState({ expanded: true })
  }

  colapse() {
    this.setState({ expanded: false })
  }

  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    }

    this.expand = this.expand.bind(this);
    this.colapse = this.colapse.bind(this);
  }

  render() {
    // const showExpandColapseButton = this.props.children.length >= this.props.childrenShownOnUnexpanded;
    return (
      <div className='pa2'>
        <Card>
          <CardHeader
            title={this.props.title}
            action={
              <IconButton
                onClick={this.props.handleHeaderAction}
              >
                { this.props.edit? <ModeEdit/> : <Add /> }
              </IconButton>
            }
          />
          <CardContent>
            { this.props.children }
          </CardContent>
          {
            /*showExpandColapseButton ?
              <CardActions>
                <Button
                  onClick={this.state.expanded? this.colapse : this.expand }
                >
                  { this.state.expanded? <ExpandLess /> : <ExpandMore /> }
                  { this.state.expanded? 'Less' : 'More' }
                </Button>
              </CardActions> : null*/
          }
        </Card>
      </div>
    )
  }
}

ProfileSectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  handleHeaderAction: PropTypes.func.isRequired,
  // childrenShownOnUnexpanded: PropTypes.number.isRequired,
  edit: PropTypes.bool,
}

export default ProfileSectionWrapper;
