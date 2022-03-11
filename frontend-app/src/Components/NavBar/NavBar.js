import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import facebookIcon from '../images/facebook.svg';
import linkedinIcon from '../images/linkedin.svg';
import instagramIcon from '../images/instagram.svg';
import logoIcon from '../images/logoIcon.png';
import { useLocation } from 'react-router-dom';


const NavBar = props => {

    const [sidebar, setSidebar] = useState(false);
    const [hide, setHide] = useState(true);
    const [mainPage, setMainPage] = useState(true);
    const [logoOn, setLogoOn] = useState(false);
    const [logoActivate, setLogoActivate] = useState('hideLogo')

    const openNav = () => {
        setSidebar(!sidebar);
        setHide(!hide);
    }

    /* Finding the path to know if should render with Link or ScrollLink */
    const location = useLocation();     
    const isMainPath = (location) => {
        if (location.pathname !== '/') {
            setMainPage(false);
        } else {
            setMainPage(true);
        }
    }

    // finding the size of the user's screen and setting the logo to show or not
    let screenWidth = window.screen.width;
    const showLogo = () => {
        if (screenWidth > 550) {
            setLogoOn(true);
        } else {
            setLogoOn(false);
        }
    }

    // use the function to change the boolean to false if the path changes
    useEffect(() => {
        isMainPath(location);
        showLogo();             // <--- needs to know if the size of the screen is big enought for the logo
        activateLogo()          // <--- it was created to know if the menu bar is activate or not.
    }, [location, hide]);       // <--- when the hide status change, need to re use the activateLogo function to make the logo desapear

    const activateLogo = () => {
        if(hide) {
            setLogoActivate('hideLogo');
        } else {
            setLogoActivate('showLogo');
        } 
    }
    
    return (
        <>
        <div className={mainPage ? "navBar" : "navBar-absolute"}>
            {mainPage 
            ?
            <ScrollLink to="home" className={logoOn ? 'logo' : logoActivate} smooth={true} duration={1000}><img alt="Logo" src={logoIcon} /></ScrollLink>
            :
            <Link to={{pathname: '/', state: 'home'}} className="logo" onClick={isMainPath}><img alt="Logo" src={logoIcon} /></Link>
            }
            <Link to="#" className="menu-bars">
                <FaBars className={hide ? 'menu-button-active' : 'menu-button-hide'} onClick={openNav} sidebar={sidebar} />
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'><div className='menu-bars' onClick={openNav}><AiOutlineClose /></div></li>
                <li>{
                    mainPage 
                    ?
                    <ScrollLink to="home" onClick={openNav} smooth={true} duration={1000}>Home</ScrollLink>
                    :
                    <Link to={{pathname: '/', state: 'home'}} onClick={isMainPath && openNav}>Home</Link>
                }</li>
                <li>{
                    mainPage
                    ?
                    <ScrollLink to="projectsPage" onClick={openNav} smooth={true} duration={1000}>Projects</ScrollLink>
                    :
                    <Link to={{pathname: '/', state: 'projectsPage'}} onClick={isMainPath && openNav} path="projects">Projects</Link>
                }</li>
                <li>{
                    mainPage
                    ?
                    <ScrollLink to="about" onClick={openNav} smooth={true} duration={1000}>About</ScrollLink>
                    :
                    <Link to={{pathname: '/', state: 'about'}} onClick={isMainPath && openNav}>About</Link>
                }</li>
                <li>{
                    mainPage
                    ?
                    <ScrollLink to="press" onClick={openNav} smooth={true} duration={1000}>Press</ScrollLink>
                    :
                    <Link to={{pathname: '/', state: 'press'}} onClick={isMainPath && openNav}>Press</Link>
                }</li>
                <li>{
                    mainPage
                    ?
                    <ScrollLink to="contact" onClick={openNav} smooth={true} duration={1000}>Contact</ScrollLink>
                    :
                    <Link to={{pathname: '/', state: 'contact'}} onClick={isMainPath && openNav}>Contact</Link>
                }</li>
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