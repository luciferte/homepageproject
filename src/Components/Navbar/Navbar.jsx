import React from 'react'
import './Navbar.css'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">TechLaunch</div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>
                    <Link to="services" spy={true} smooth={true}>
                        About
                        </Link>
                        </li>
                    <li>service</li>
                    <li>contact</li>
                </ul>
            </div>
            <button className="button">
                 Login/sign up
            </button>
        </div>
    </div>
  )
}

export default Navbar