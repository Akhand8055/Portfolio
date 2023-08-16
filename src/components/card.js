import React from 'react'
import './card.css'

function Card(props) {

  if (props.value == "left") {
    return (
      <div id='card'>
        <h2>{props.heading}</h2>
        <div id='profile'>
          {props.orientation=="horizontal" ? <img id='image1' src={props.img} /> : <img id='image2' src={props.img}/>}
          
          <p id='content'>{props.content}</p>
        </div>
      </div>
    )
  }
  else {
    return (
      <div id='card'>
        <h2>{props.heading}</h2>
        <div id='profile'>
          <p id='content'>{props.content}</p>
          {props.orientation=="horizontal" ? <img id='image1' src={props.img} /> : <img id='image2' src={props.img}/>}
        </div>
      </div>
    )
  }
}

export default Card