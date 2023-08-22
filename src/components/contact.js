import React from 'react'
import './contact.css'
import img from '../images/contactImage.png'
import lc from '../images/leetCode.png'
import gfg from '../images/gfg-logo.png'
import github from '../images/github.webp'
import ln from '../images/linkedin.png'

function Contact() {
  return (
    <div id='contact'>
      <div id='knowMe'>
        <p>Good to see you at the bottom of this page. It seems you are interested in my profile. I would like to give you some more insights about me. I like to explore new technologies and work on real world applications with them. I have been coding for quite a long period which you can verify through the various coding profiles provided in this section. Also, I am a fitness freak and I love reading books, writing poems and many more.</p>
      </div>
      <div id='contactImage'>
        <img src={img} />
        <div id='codingId'>
          <div><a target="_blank" href='https://leetcode.com/apm2002/'><img src={lc} /></a></div>
          <div><a target="_blank" href='https://auth.geeksforgeeks.org/user/apm2002'><img src={gfg} /></a></div>
          <div><a target="_blank" href='https://github.com/Akhand8055'><img src={github} /></a></div>
          <div><a target="_blank" href='https://www.linkedin.com/in/akhand-pratap-mall-b9474b229/'><img src={ln} /></a></div>
        </div>
      </div>
    </div>
  )
}

export default Contact