import React from "react";
import './Testimonial.css';
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import {Pagination} from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css';





const Testimonial = () => {
    const clients = [
        {
            img:profilePic1,
            designation: "Ex-Google-Intern",
            review:
            "Working with Harsh has been a privilege. Their unwavering consistency and tireless work ethic have set a high standard for our team. Their coding skills are exceptional and consistently deliver top-notch results."


        },
        {
            img:profilePic2,
            designation: "Ex-D.E.Shaw-Intern",
            review:
            "Harsh is a rare gem in the software development world. Their consistent dedication and hard work never fail to impress. Their technical prowess and problem-solving abilities are second to none."

        },
        {
            img:profilePic3,
            designation: "Ex-Paypal-Intern",
            review:
            "Harsh is a standout software developer who consistently goes above and beyond. Their work ethic and dedication are an inspiration to the entire team. Their skills in software development are exceptional"
        },
        {
            img:profilePic4,
            designation: "Ex-mitacs-Intern",
            review:
            "Harsh is the epitome of a dedicated software developer. Their unwavering consistency, relentless hard work, and remarkable skills make them an invaluable asset to any project. It's a privilege to work alongside them."
        }

    ]

 
    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Perception of </span>
                <span> Software Developers </span>
                <span>About me</span>
            </div>
            <div className="blur t-blur1" style={{background: "var(--purple"}}></div>
            
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
            

            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            >
                {clients.map((client, index)=> {
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">

                            <img src={client.img} alt="" />
                            
                            <span>
                                {client.designation} <br/>
                                {client.review}</span>


                            </div>
                            

                        </SwiperSlide>
                    )
                })}



            </Swiper>
        </div>
        // slider
        
        



    )
}

export default Testimonial