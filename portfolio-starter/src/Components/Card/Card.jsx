import React from "react";
import './Card.css'

const Card= ({emoji, heading, detail}) => {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <a href="https://github.com/geekyharsh01">
            <button className="c-button">Learn More</button>
            </a>
            
        </div>
    )
}

export default Card