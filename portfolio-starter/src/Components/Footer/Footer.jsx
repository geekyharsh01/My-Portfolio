import React from "react";
import './Footer.css'
import Wave from "../../img/wave.png";
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Linkden from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave}alt="" style={{width:'100%'}} />
            <div className="f-content">
                <span>kumar.218@iitj.ac.in</span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/dream_billionaire01/">
                    <Insta color='white' size='3rem'/>
                    </a>
                    <a href="https://github.com/geekyharsh01">
                    <Github color='white' size='3rem'/>
                    </a>
                    <a href="https://www.linkedin.com/in/harsh-kumar-000526204/">
                    <Linkden color='white' size='3rem'/>
                    </a>

                    
                    
                    
                </div>
            </div>
        </div>
        
    )
}


export default Footer