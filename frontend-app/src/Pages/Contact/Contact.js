import React from "react";
import './Contact.css';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/goTop.png';
import logoIcon from '../../Components/images/logoIconFooter.png';

const Contact = () => {
    return(
        <div className="contact-page-container">
            <div className="ContactPageContent" id="contact">
                <div className="contactInfo">
                    <h1>GET IN TOUCH</h1>
                    <h4>FLAVIA_FLA@ARQUITETA.COM</h4>
                    <h4>CARRER ASTURIAS 9</h4>
                    <h4>08012 BARCELONA</h4>
                    <h4>+34 653 352 120</h4>
                </div>
                <div className="contactRights">
                    <h4>FLAVIA ANDOLFI (C) 2022 ALL RIGHTS RESERVED</h4>
                </div>
                <div className="contactLogo">
                    <ScrollLink to="home" className="logo" smooth={true} duration={1000}><img alt="Logo" src={logoIcon} /></ScrollLink> 
                </div>
            </div>

            <div className="contact-footer">
                <div className="scrollButtonContact">
                    <ScrollLink className="scrollLink" to="home" smooth={true} duration={1000}><img className="imageScl" src={imageScroll} alt="scroll symbol" /></ScrollLink>
                </div>
            </div>
        </div>

    )
}

export default Contact;