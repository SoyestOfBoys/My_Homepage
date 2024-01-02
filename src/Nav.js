import * as React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import { useState } from 'react';
import Hamburger from './Hamburger';

export default function Nav() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen( !hamburgerOpen )
    }

    return (
        <body className='navBar'>
            <div className='NavName'>
                <h1>Tyler Goble</h1>
                <h3>Front End, Back End, and Full Stack Developer</h3>
            </div>
          <nav className='NavMenu'>
                <div  className='NavList'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='/Projects'>Projects</Link></li>
                        <li><Link to='/Bio'>Biography</Link></li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                </div>

            <style jsx>{`
            @media{
                nav ul{
                    display: ${hamburgerOpen ? 'inline' : 'none'};
                }
            }
        `}</style>
          </nav>
      </body>
    );
  }