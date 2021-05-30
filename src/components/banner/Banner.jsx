import React from 'react';
import "../banner/Banner.scss";
import {Link} from "react-router-dom";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="banner">
        <div className="banner_first"/>
        <Carousel 
                autoPlay
                interval={3000}
                showIndicators={false}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop
        >
            <div className="wrap">
                <Link to="">
                    <img src="./images/slider/slider-1.jpg" alt="slider" />
                </Link>
            </div>
            <div className="wrap">
                <Link to="">
                    <img src="./images/slider/slider-2.jpg" alt="slider" />
                </Link>
            </div>
            <div className="wrap">
                <Link to="">
                    <img src="./images/slider/slider-3.jpg" alt="slider" />
                </Link>
            </div>
            <div className="wrap">
                <Link to="">
                    <img src="./images/slider/slider-4.jpg" alt="slider" />
                </Link>
            </div>
            <div className="wrap">
                <Link to="">
                    <img src="./images/slider/slider-5.jpg" alt="slider" />
                </Link>
            </div>
            <div className="wrap">
                <Link to="">
                    <img src="./images/slider/slider-6.jpg" alt="slider" />
                </Link>
            </div>
            <div className="wrap">
                <Link to="">
                    <img src="./images/slider/slider-7.jpg" alt="slider" />
                </Link>
            </div>
           
        </Carousel>
        </div>
    )
}

export default Banner;
