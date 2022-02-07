import React from "react";
import './About.css';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/baixa.png';

const About = () => {
    return (
        <div className="about-page-container">
            <div className="AboutPageContent" id="about">

            </div>

            <div className="about-footer">
                <div className="scrollButton">
                    <ScrollLink className="scrollLink" to="press" smooth={true} duration={1000}><img className="imageScl" src={imageScroll} alt="scroll symbol" /></ScrollLink>
                </div>
            </div>
        </div>

    )
}

export default About;