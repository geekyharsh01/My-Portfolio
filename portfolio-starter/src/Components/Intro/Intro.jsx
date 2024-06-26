import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vectorl from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const Intro = () => {
    const transition = {duration:2, type: 'spring'};

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return  (
        <div className="Intro" id="Home">
            <div className="i-left">
                <div className="i-name">
                    <span >Hy! I Am</span>
                    <span>Harsh Kumar</span>
                    <span>I am doing AIDS engineering 
                        in IITJ. I have done work in 
                        machine learning, deep learning 
                        also have developed some website 
                        and Android Applications.Currently 
                        opened to Full-time SDE and AI/ML 
                        Job roles.
                        </span>
                </div>
                <Link spy={true} to= 'Contact' smooth={true}> 
                <button className="button i-button">Hire me</button>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/geekyharsh01">
                        <img src={Github} alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/harsh-kumar-000526204/">
                    <img src={LinkedIn} alt="" />
                    </a>

                    <a href="https://www.instagram.com/dream_billionaire01/">
                    <img src={Instagram} alt="" />
                    </a>
                    
                    
                </div>
            </div>
            <div className="i-right">
            <img src={Vectorl} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" id="boy"/>
            <motion.img
            initial = {{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
             src={glassesimoji} alt="" />

            <motion.div 
            initial = {{top: '-4%', left:'74%'}}
            whileInView={{left:'68%'}}
            transition={transition}

            style={{top: '-4%', left:'68%'}}
            className="floating-div">
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div 
            initial= {{left:'9rem', top:'18rem'}}
            whileInView={{left:'1rem'}}
            transition={transition}
            style={{top: '18rem', left:'1rem'}}
            className="floating-div">
                <FloatingDiv image={thumbup} txt1='AI/ML' txt2='Engineer'/>

            </motion.div>
{/* blur divisions */}
            <div className="blur" style={{background:"rgb(238 210 255"}}></div>

            <div className="blur" style={{background:'#c1f5ff', top:'17rem',width:'21rem',height:'11rem', left:'-9rem'}}></div>

            
            </div>
        </div>

    )
}

export default Intro