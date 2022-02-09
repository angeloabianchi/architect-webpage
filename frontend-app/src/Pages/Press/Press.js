import React from "react";
import './Press.css';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/baixa.png';
import videoPress from'../../Components/images/pressVideo.mp4';

const Press = () => {
    return (
        <div className="press-page-container">
            <div className="PressPageContent" id="press">
                <video loop autoPlay className="video">
                    <source
                    src={videoPress}
                    type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="press-footer">
                <div className="scrollButton">
                    <ScrollLink className="scrollLink" to="contact" smooth={true} duration={1000}><img className="imageScl" src={imageScroll} alt="scroll symbol" /></ScrollLink>
                </div>
            </div>
        </div>

    )
}

export default Press;