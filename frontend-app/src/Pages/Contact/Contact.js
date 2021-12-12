import React from "react";
import './Contact.css';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/LogoFlavia0.png';

const Contact = () => {
    return(
        <div className="contact-page-container">
            <div className="ContactPageContent" id="contact">

            </div>

            <div className="contact-footer">
                <div className="scrollButton">
                    <ScrollLink className="scrollLink" to="home" smooth={true} duration={1000}><img className="imageScl" src={imageScroll} alt="scroll symbol" /></ScrollLink>
                </div>
            </div>
        </div>

    )
}

export default Contact;