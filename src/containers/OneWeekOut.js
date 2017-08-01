import React from 'react'
import { Row, Col, Card } from 'react-materialize'

function OneWeekOut () {
  const days = [
    { name: 'Mon', number: 11, today: false },
    { name: 'Tue', number: 12, today: false },
    { name: 'Wed', number: 13, today: false },
    { name: 'Thu', number: 14, today: true },
    { name: 'Fri', number: 15, today: false },
    { name: 'Sat', number: 16, today: false },
    { name: 'Sun', number: 17, today: false },
  ]
  return (
    <Row l={7}>
      {
        days.map(day => {
          return (
            <Col l={1} key={day.name} className={day.today?'blue-grey lighten-2': 'blue-grey'}>
              <h5>{day.name}</h5>
              <p>{day.number}</p>
            </Col>
          )
        })
      }
    </Row>
  )
}

export default OneWeekOut