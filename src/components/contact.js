import React from 'react'
import './contact.css'
import img from '../images/contactImage.png'

function Contact() {
  return (
    <div id='contact'>
        
        <form>
            <label for='firstName'>First Name</label>
            <br />
            <input id='firstName' placeholder='First name'/>
            <br />
            <label for='lastName'>Last Name</label>
            <br />
            <input id='lastName' placeholder='Last name'/>
            <br />
            <label for='email'>Email</label>
            <br />
            <input id='email' placeholder='Email address'/>
            <br />
            <label for='message'>Message</label>
            <br />
            <textarea id='message' placeholder='Enter your message here...'/>
        </form>
        <div id='contactImage'>
            <img src={img}/>
        </div>
    </div>
  )
}

export default Contact