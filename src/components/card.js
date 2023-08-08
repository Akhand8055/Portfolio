import React from 'react'
import './card.css'

function Card(props) {

  if (props.value == "left") {
    return (
      <div id='card'>
        <h2>{props.heading}</h2>
        <div id='profile'>
          <img id='image' src={props.img} />
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
          <img id='image' src={props.img} />
        </div>
      </div>
    )
  }
}

export default Card