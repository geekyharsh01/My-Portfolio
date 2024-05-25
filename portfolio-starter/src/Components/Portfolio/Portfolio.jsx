import React from "react";
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Sidebar from "../../img/ClipExplain.jpg";
import Ecommerce from "../../img/MusicWeb.jpg";
import HOC from "../../img/Pandemic.png";
import MusicApp from "../../img/Webchat.jpg";
import Portfolioimg from "../../img/portfolio.jpg";





const Portfolio = () => {
    return(
        <div className="portfolio" id="Projects">
            {/* heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>
            {/* Slider */}
            <Swiper spaceBetween={75}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Portfolioimg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Portfolio

