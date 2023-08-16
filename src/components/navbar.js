import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div id='navbar'>
        <nav>
            <ul>
            <li><a href='#description'>About me</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#skillset'>Skills</a></li>
            <li><a href='#education'>Education</a></li>
            <li><a href='#contactMe'>Contact me</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar