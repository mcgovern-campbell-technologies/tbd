import React from 'react'

import { NavItem } from 'react-materialize'
import { Link } from 'react-router-dom'

function AppLink ({ to }) {
  return (
    <Link to={ to } >
      <NavItem waves='darken'>{to.pathname}</NavItem>
    </Link>
  )
}
export default AppLink