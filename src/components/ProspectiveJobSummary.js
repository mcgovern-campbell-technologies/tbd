import React from 'react'
import { Row, Col, Icon } from 'react-materialize'

function PotentialJobSummary ({ job }) {
  const { 
    position,
    location,
    distance,
    skillsNeeded,
    favorites,
    connections,
    rate,
    date, 
  } = job
  return (
      <Row>
        <Col l={3}>
          <h5 style={{color: 'grey'}}>{ position }</h5>
          <p>{location}</p>
        </Col>
        <Col l={2}>
          <p>{`SkillSkore L3 | ${skillsNeeded}`}</p>
        </Col>
        <Col l={2} offset='l2'>
        </Col>
      </Row>
  )
}
/*{
      position: 'Skilled Machinist',
      location: 'Warren, MI',
      distance: 8.1,
      skillsNeeded: 43,
      favorites: 72,
      connections: 23,
      rate: 18.50,
      date: 'Thursday, Nov. 14th'
    }*/

export default PotentialJobSummary