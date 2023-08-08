import React from 'react'
import './description.css'
import img from '../images/profilePhoto.png'
import lc from '../images/leetCode.png'
import gfg from '../images/gfg-logo.png'
import github from '../images/github.webp'
import ln from '../images/linkedin.png'

function Description() {
  return (
    <div id='description'>
      <div>
        <h1>Hi,</h1>
        <h1>Myself Akhand Pratap Mall</h1>
        <h1>and I am a Full Stack Web developer</h1>
      </div>
      <div id='profileSection'>
        <img src={img} />
        <div id='codingId'>
          <div><button>Resume</button></div>
          <div><a target="_blank" href='https://leetcode.com/apm2002/'><img src={lc}/></a></div>
          <div><a target="_blank" href='https://auth.geeksforgeeks.org/user/apm2002'><img src={gfg}/></a></div>
          <div><a target="_blank" href='https://github.com/Akhand8055'><img src={github}/></a></div>
          <div><a target="_blank" href='https://www.linkedin.com/in/akhand-pratap-mall-b9474b229/'><img src={ln}/></a></div>
        </div>
      </div>
    </div>
  )
}

export default Description