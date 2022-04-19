
import React, {useState} from 'react';

import './navbar.css';


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);
    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
        <div className="logo">Akinbebije Micheal</div>
        <div className="nav-links" >
            <ul>
                <li>About Me</li>
                <li>Skills and Experience</li>
                <li>Contact Me</li>
                
            </ul>
        </div>
        </div>
      )
  }


   

export default Navbar