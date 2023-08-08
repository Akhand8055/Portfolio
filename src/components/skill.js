import React from 'react'
import './skill.css'
import img from '../images/html.png';
import css from '../images/css-3.png';
import js from '../images/javascript.png';
import btstrp from '../images/bootstrap.png';
import node from '../images/node.png';
import mongo from '../images/mongo.jpg';
import express from '../images/express.png';
import react from '../images/react.png';
import github from '../images/github.webp';
import git from '../images/git.png';

function Skill() {
  return (
    <div id='skill'>
        <div id='elements'>
        <div><img src={img} alt='HTML'/><div>HTML</div></div>
        <div><img src={css}/><div>CSS</div></div>
        <div><img src={js}/><div>Javascript</div></div>
        <div><img src={btstrp}/><div>Bootstrap</div></div>
        <div><img src={node}/><div>Node</div></div>
        <div><img src={mongo}/><div>MongoDb</div></div>
        <div><img src={express}/><div>Express</div></div>
        <div><img src={react}/><div>React</div></div>
        <div><img src={github}/><div>Github</div></div>
        <div><img src={git}/><div>Git</div></div>
        </div>
    </div>
  )
}

export default Skill