import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';


import ModeEdit from 'material-ui-icons/ModeEdit';
import Clear from 'material-ui-icons/Clear';


// { 
//     position: 'Electricion',
//     company: 'Kuka',
//     location: 'Detroit, Mi',
//     startDate: 'Sep 2016',
//     endDate: 'Oct 2016',
//   }

function ExpirienceListItem (props) {

  const { properties, identity } = props.node;

  const { position, company, location, startDate, endDate } = properties;

  return (
    <div className='mb2'>
      <div className='dib mr3'>
        <Avatar 
            style={{ height: 60, width: 60 }}
            sizes='10'
          >
          { company[0] }
        </Avatar>
      </div>
      <div className="dib">
        <Typography>
          { position }
        </Typography>
        <Typography>
          { company }
        </Typography>
        <Typography>
          { location }
        </Typography>
        
      </div>
      <div className="dib fr">
        <IconButton
            onClick={() => props.handleDeleteExperience(identity)}
          >
          <Clear />
        </IconButton>
        <Typography>
          { `${startDate} ${startDate && endDate? '-': null} ${endDate}` } 
        </Typography>
        
      </div>
    </div>
  )
}

export default ExpirienceListItem;