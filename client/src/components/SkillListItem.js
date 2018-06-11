import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import _ from 'lodash';

import { SkillChip } from './componentIndex';


export default class SkillListItem extends Component {
  constructor(props) {

    super(props);
    
  }
  render() {
    return (
      <div> 
        <SkillChip { ...this.props.properties}/>
        <div className='dib fr'>
          {

            _.uniq(_.range(0, _.ceil(Math.random() * 5))).map((value, key) => 
              <div 
                className='fr dib pa1'
                key={key}
              >
                <Avatar
                  sizes='10'
                > </Avatar>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}