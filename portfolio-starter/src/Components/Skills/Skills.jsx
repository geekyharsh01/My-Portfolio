import React from "react";
import './Skills.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png"
import Humble  from "../../img/humble.png"
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import {motion} from "framer-motion";

const Skills = () => {
    const transition = {duration:2, type: 'spring'};
    return (
        <div className="skills">
            {/* left side */}
            <div className="awesome" id="Skills">
                <span>My Awesome</span>
                <span>Skills</span>
                <span>
                I am a versatile developer and innovator 
                with a strong <br/>foundation in web development,
                 machine learning, and deep learning.<br/> My 
                 expertise extends to building impactful
                  Solutions, reflecting<br/> my passion for 
                  creating cutting-edge solutions at the
                   intersection of<br/> technology and user 
                   experience.
                </span>

                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            <div className="cards">
                <motion.div
                initial ={{left:'24rem'}}
                whileInView={{left:'19rem'}}
                transition={transition}
                style={{left:'19rem'}}>

                    <Card
                    emoji = {HeartEmoji}
                    heading= {'Programming'}
                    detail = {"C, C++, Python, Bash, SQL, R, Latex"}  
                    />
                </motion.div>
                <motion.div 
                initial ={{left:'-4rem'}}
                whileInView={{left:'1rem'}}
                transition={transition}
                style={{top:"12rem", left:"1rem"}}>
                    <Card
                    emoji={Glasses}
                    heading={'Development'}
                    detail={"HTML, CSS, Java, Javascript, Django, Bootstrap, NodeJS, ReactJS"}
                    />
                </motion.div>

                <motion.div 
                initial ={{left:'24rem'}}
                whileInView={{left:'17rem'}}
                transition={transition}
                style={{top:'19rem', left:'17rem'}}>
                <Card
                emoji={Humble}
                heading={"Machine Learning"}
                detail={"Deep Learning, Neural Network, Numpy, Pandas, Pytorch, Cuda, Tensorflow, Jupyter Notebook, openCV"}
                />
                </motion.div>
                <div>
                    <div className="blur s-blur2" style={{background:"var(--purple"}}></div>
                </div>
            </div>

        </div>
    )
}


export default Skills