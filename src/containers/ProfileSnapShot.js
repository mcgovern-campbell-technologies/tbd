import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Col } from 'react-materialize'

import { OneWeekOut } from './index'
import { ProfileSnapShotWrapper, ProspectiveJobSummary } from '../components/index'

function ProfileSnapShot (state) {
  const jobs = [
    {
      position: 'Skilled Machinist',
      location: 'Warren, MI',
      distance: 8.1,
      skillsNeeded: 43,
      favorites: 72,
      connections: 23,
      rate: 18.50,
      date: 'Thursday, Nov. 14th'
    },
    {
      position: 'Skilled Machinist',
      location: 'Warren, MI',
      distance: 8.1,
      skillsNeeded: 43,
      favorites: 72,
      connections: 23,
      rate: 18.50,
      date: 'Thursday, Nov. 14th'
    },
    {
      position: 'Skilled Machinist',
      location: 'Warren, MI',
      distance: 8.1,
      skillsNeeded: 43,
      favorites: 72,
      connections: 23,
      rate: 18.50,
      date: 'Thursday, Nov. 14th'
    },{
      position: 'Skilled Machinist',
      location: 'Warren, MI',
      distance: 8.1,
      skillsNeeded: 43,
      favorites: 72,
      connections: 23,
      rate: 18.50,
      date: 'Thursday, Nov. 14th'
    },
  ]
  return (
    <Col l={9} offset='l1'>
      <OneWeekOut/>
      { jobs.map(job => <ProspectiveJobSummary job={job} />)}
    </Col>
  )
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(ProfileSnapShot)