import React from 'react'
import './card.css'

function Card(props) {

  if (props.value == "left") {
    return (
      <div id='card'>
        <h2>{props.heading}</h2>
        <div id='profile'>
          {props.orientation=="horizontal" ? <img id='image1' src={props.img} /> : <img id='image2' src={props.img}/>}
          <div>
          <p id='content'>{props.content}</p>
          <div>
            <a href={props.liveLink} target="_blank"><button className='projectButton'>{props.live}</button></a>
            {props.repo=="Repo" ? <a href={props.repoLink} target="_blank"><button className='projectButton'>{props.repo}</button></a> : <div></div>}
          </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div id='card'>
        <h2>{props.heading}</h2>
        <div id='profile'>
          <div>
          <p id='content'>{props.content}</p>
          <div>
            <a href={props.liveLink} target="_blank"><button className='projectButton'>{props.live}</button></a>
            {props.repo=="Repo" ? <a href={props.repoLink} target="_blank"><button className='projectButton'>{props.repo}</button></a> : <div></div>}
          </div>
          </div>
          {props.orientation=="horizontal" ? <img id='image1' src={props.img} /> : <img id='image2' src={props.img}/>}
        </div>
      </div>
    )
  }
}

export default Card