import React from 'react'
import './description.css'
import img from '../images/profilePhoto.png'
import { useEffect } from 'react';
import Typed from 'typed.js';

function Description() {
  
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['MERN Stack Web Developer.', 'Programmer.','Machine Learning Enthusiast.'],
      typeSpeed: 80,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div id='description'>
      <div>
        <h1>Hi,</h1>
        <h1>Myself Akhand Pratap Mall</h1>
        <h1>and I am a <span ref={el} id="varyingText"></span></h1>
      </div>
      <div id='profileSection'>
        <img src={img} id="profileImage"/>
        <a href='https://drive.google.com/file/d/1qOR6-351LTs1_M_bbQw4b0uUxajW6awY/view?usp=sharing' target="_blank"><button id='resumeButton'>Resume</button></a>
      </div>
    </div>
  )
}

export default Description