import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">Harsh</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:"none"}}>
                        <div><Link spy={true} to= 'Navbar' smooth={true} activeClass="activeClass">
                        <li>Home</li>
                        </Link></div>
                        
                        <div>
                        <Link spy={true} to= 'Skills' smooth={true}>
                        <li>Skills</li>
                        </Link>
                        </div>
                        <div>
                        <Link spy={true} to= 'Jobs' smooth={true}>
                        <li>Jobs</li>
                        </Link>
                        </div>
                        <div>
                        <Link spy={true} to= 'Projects' smooth={true}>
                        <li>Projects</li>
                        </Link>
                        </div>
                        <div>
                        <Link spy={true} to= 'Testimonials' smooth={true}>
                        <li>Testimonials</li>
                        </Link>
                        </div>

                        
                        
                        
                        
                        
                        
                    </ul>
                </div>
                <Link spy={true} to= 'Contact' smooth={true}> 
                <button className="button n-button">
                    Contact
                </button>
                </Link>
                
            </div>
        </div>

    )
}


export default Navbar