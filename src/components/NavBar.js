import React from 'react'
import { Navbar } from 'react-materialize'

function NavBar ({ children }) {
  return (
    <Navbar brand="luber" right className='grey lighten-2'>
      { children }
    </Navbar>
  )
}

export default NavBar

