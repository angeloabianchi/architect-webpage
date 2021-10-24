import React, { useState } from 'react';
import './NavBar.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import facebookIcon from '../images/facebook.svg';
import linkedinIcon from '../images/linkedin.svg';
import instagramIcon from '../images/instagram.svg';


const NavBar = props => {

    const [sidebar, setSidebar] = useState(false);
    const [hide, setHide] = useState(true);

    const openNav = () => {
        setSidebar(!sidebar);
        setHide(!hide);
    }

    
    return (
        <>
        <div className="navBar">
            <LinkScroll to="home" className="logo" smooth={true} duration={1000}><img alt="Logo" src="" /></LinkScroll>        
            <Link to="home" className="name">FLANDO</Link>
            <Link to="#" className="menu-bars">
                <FaBars className={hide ? 'menu-button-active' : 'menu-button-hide'} onClick={openNav} sidebar={sidebar} />
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'><Link to="#" className='menu-bars' onClick={openNav}><AiOutlineClose /></Link></li>
                <li><LinkScroll to="home" onClick={openNav} smooth={true} duration={1000}>Home</LinkScroll></li>
                <li><LinkScroll to="projects" onClick={openNav} smooth={true} duration={1000}>Projects</LinkScroll></li>
                <li><LinkScroll to="about" onClick={openNav} smooth={true} duration={1000}>About</LinkScroll></li>
                <li><LinkScroll to="press" onClick={openNav} smooth={true} duration={1000}>Press</LinkScroll></li>
                <li><LinkScroll to="contact" onClick={openNav} smooth={true} duration={1000}>Contact</LinkScroll></li>
            </ul>
            <div className="socialMediaArea">
                <a className="socialMediaIcon" href="http://www.google.com"><img src={facebookIcon} alt="facebook ICON" /></a>
                <a className="socialMediaIcon" href="http://www.google.com"><img src={instagramIcon} alt="instagram ICON" /></a>
                <a className="socialMediaIcon" href="http://www.google.com"><img src={linkedinIcon} alt="linkedin ICON" /></a>

            </div>
        </nav>

        </>
        
    );
}

export default NavBar;