import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import _ from 'lodash';

import { SkillChip } from './componentIndex';


export default class SkillListItem extends Component {
  constructor(props) {

    super(props);

    this.styles = {
      wrapper: {

      },
      skillChip: {
        display: 'inline-block',
        marginTop: '5'
      },
      avatar: {
        float: 'right',
        display: 'inline-block',
      }
    }
  }
  render() {
    return (
      <div style={this.styles.wrapper}> 
        <SkillChip { ...this.props.properties} style={this.styles.skillChip} />
        {_.range(0, _.ceil(Math.random() * 5)).map((value) => <Avatar
          key={value}
          size={35}
          style={this.styles.avatar}
        />)}
      </div>
    )
  }
}