import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div id='navbar'>
        <nav>
            <ul>
            <li><a href='#projects' id='navPro'>Projects</a></li>
            <li><a href='#skillset' id='navSkill'>Skills</a></li>
            <li><a href='#education' id='navEdu'>Education</a></li>
            <li><a href='#contactMe' id='navAbout'>About me</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar