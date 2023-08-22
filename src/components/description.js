import React from 'react'
import './description.css'
import img from '../images/profilePhoto.png'


function Description() {
  return (
    <div id='description'>
      <div>
        <h1>Hi,</h1>
        <h1>Myself Akhand Pratap Mall</h1>
        <h1>and I am a Full Stack Web developer</h1>
      </div>
      <div id='profileSection'>
        <img src={img} id="profileImage"/>
      </div>
    </div>
  )
}

export default Description