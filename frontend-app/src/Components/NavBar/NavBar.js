import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import facebookIcon from '../images/facebook.svg';
import linkedinIcon from '../images/linkedin.svg';
import instagramIcon from '../images/instagram.svg';
import logoIcon from '../images/logoIconFooter.png';
import { useLocation } from 'react-router-dom';


const NavBar = props => {

    const [sidebar, setSidebar] = useState(false);
    const [hide, setHide] = useState(true);
    const [mainPage, setMainPage] = useState(true);

    const openNav = () => {
        setSidebar(!sidebar);
        setHide(!hide);
    }

    const location = useLocation();     /* <--- finding the path to know if should use the link or ScrollLink */
    const isMainPath = (location) => {
        if (location.pathname !== '/') {
            setMainPage(false);
        } else {
            setMainPage(true);
        }
    }

    // use the function to change the boolean to false if the path changes
    useEffect(() => {
        isMainPath(location);
    }, [location]);

    
    return (
        <>
        <div className="navBar">
            {mainPage 
            ?
            <ScrollLink to="home" className="logo" smooth={true} duration={1000}><img alt="Logo" src={logoIcon} /></ScrollLink>
            :
            <Link to='/' className="logo" onClick={isMainPath}><img alt="Logo" src={logoIcon} /></Link>
            }
            <Link to="#" className="menu-bars">
                <FaBars className={hide ? 'menu-button-active' : 'menu-button-hide'} onClick={openNav} sidebar={sidebar} />
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'><Link to="#" className='menu-bars' onClick={openNav}><AiOutlineClose /></Link></li>
                <li>{
                    mainPage 
                    ?
                    <ScrollLink to="home" onClick={openNav} smooth={true} duration={1000}>Home</ScrollLink>
                    :
                    <Link to='/' onClick={isMainPath && openNav}>Home</Link>
                }</li>
                <li>{
                    mainPage
                    ?
                    <ScrollLink to="projects" onClick={openNav} smooth={true} duration={1000}>Projects</ScrollLink>
                    :
                    <Link to={{pathname: '/', state: 'projects'}} onClick={isMainPath && openNav} path="projects">Projects</Link>
                }</li>
                <li>{
                    mainPage
                    ?
                    <ScrollLink to="about" onClick={openNav} smooth={true} duration={1000}>About</ScrollLink>
                    :
                    <Link to="/" onClick={isMainPath && openNav}>About</Link>
                }</li>
                <li>{
                    mainPage
                    ?
                    <ScrollLink to="press" onClick={openNav} smooth={true} duration={1000}>Press</ScrollLink>
                    :
                    <Link to="/" onClick={isMainPath && openNav}>Press</Link>
                }</li>
                <li>{
                    mainPage
                    ?
                    <ScrollLink to="contact" onClick={openNav} smooth={true} duration={1000}>Contact</ScrollLink>
                    :
                    <Link to="/" onClick={isMainPath && openNav}>Contact</Link>
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