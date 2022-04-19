import React from 'react';
import './home.css';
import picture from './picture.jpg';

function Home() {
  return (
    <div className='homediv'>
        <div className="one">  
            <h1>Hi, I'm Micheal, a Full-Stack Developer</h1>
           
            <button className='emailbutton'>Email me</button>
            <span className='spann'><a href="https://www.linkedin.com/in/akinbebije-micheal-68626522a">Linkedin</a>/<a href="https://wa.me/+2348026480554">Whatsapp</a>/<a href="https://www.facebook.com/akinbebije.mcnewton">Facebook</a></span>
        </div>
        <div className="two">
            <div className='picshift'></div>
            <img src={picture} className="picture" alt="logo"/>
        </div>
    </div>
  )
}

export default Home