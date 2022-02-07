import React from "react";
import './Press.css';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/baixa.png';

const Press = () => {
    return (
        <div className="press-page-container">
            <div className="PressPageContent" id="press">
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