import React, {useState, useEffect} from "react";
import './Contact.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/goTop.png';
import logoIcon from '../../Components/images/logoIconFooter.png';
import { useLocation } from 'react-router-dom';

const Contact = () => {

    /* Finding the path to know if should render with the UP scroll button from contact page */
    const [mainPage, setMainPage] = useState(true);
    const location = useLocation();     
    const isMainPath = (location) => {
        if (location.pathname !== '/') {
            setMainPage(false);
        } else {
            setMainPage(true);
        }
    }

    useEffect(() => {
        isMainPath(location);
    }, [location]);

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
                <div className={mainPage ? "contactRights" : "contactRights-two"}>
                    <h4>FLAVIA ANDOLFI (C) 2022 ALL RIGHTS RESERVED</h4>
                </div>
                <div className="contactLogo">
                    {mainPage
                    ?
                    <ScrollLink to="home" className="logo-contact" smooth={true} duration={1000}><img alt="Logo" src={logoIcon} /></ScrollLink>
                    :
                <Link to={{pathname: '/', state: 'home'}} className="logo-contact"><img alt="Logo" src={logoIcon} /></Link>
                    }
                     
                </div>
            </div>

            <div className="contact-footer">
                <div className="scrollButtonContact project">
                    {mainPage 
                    ?
                    <ScrollLink className="scrollLink" to="home" smooth={true} duration={1000}><img className="imageScl" src={imageScroll} alt="scroll symbol" /></ScrollLink>
                    :
                    ""
                    }
                </div>
            </div>
        </div>

    )
}

export default Contact;