import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <header>
        <nav>
            <Link to='/'>
                    Workout Home
            </Link>
            <Link to='/about'>
                About
            </Link>
        </nav>
    </header>
  )
}

export default Navbar