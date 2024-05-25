import React from "react";
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Facebook from "../../img/Facebook.png";
import Shopify from "../../img/Shopify.png";
import {motion} from "framer-motion";

import { Link } from "react-scroll";




const Works = () => {
    const transition = {duration:4.5, type: 'spring'};
    return (
        <div className="works" id="Jobs">
            <div className="awesome">
                <span>Open For </span>
                <span>Fulltime Jobs</span>
                <span>
                I am actively exploring job openings in roles such as Data Scientist, <br/>Machine Learning Engineer, Data Engineer, Software Development Engineer, <br/>and Full Stack Developer. My demonstrated expertise and enthusiasm in these <br/>domains make me a versatile candidate, equally open to full-time, part-time, or<br/> internship positions. I am eager to join dynamic teams and play a pivotal role <br/>in advancing innovative projects.
                </span>
                <Link spy={true} to= 'Contact' smooth={true}> 
                <button className="button s-button">Hire me</button>
                </Link>
                
                
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* Right side */}
            <div className="w-right">
                <motion.div 
                initial= {{rotate: 45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={transition}

                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                
                    </div>
                    <div className="w-secCircle">
                      
                        <img src={Fiverr} alt="" />
                        
                    </div>
                    <div className="w-secCircle">
                     
                        <img src={Amazon} alt="" />
                     
                    </div>{" "}
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* background circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>


            </div>

        </div>

    )


}



export default Works