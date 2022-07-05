import React from 'react';
import {FaGithub} from "react-icons/fa"


export default function Navbar() {
  return (
    <nav>
      <i className='logo'><FaGithub /></i>
      <ul className="nav-links">
        <li className="link">home</li>
        <li className="link">about</li>
      </ul>
    </nav>
  )
}
