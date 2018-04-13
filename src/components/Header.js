import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">start</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/home">Home</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header