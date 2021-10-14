import React, { useState } from 'react';
import './NavBar.css';
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';


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
            <Link to="/" className="logo"><img alt="Logo" src="" /></Link>        
            <Link to="/" className="name">FLANDO</Link>
            <Link to="#" className="menu-bars">
                <FaBars className={hide ? 'menu-button-active' : 'menu-button-hide'} onClick={openNav} sidebar={sidebar} />
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'><Link to="#" className='menu-bars' onClick={openNav}><AiOutlineClose /></Link></li>
                <li><Link to="/" onClick={openNav}>Home</Link></li>
                <li><Link to="/projects" onClick={openNav}>Projects</Link></li>
                <li><Link to="/about" onClick={openNav}>About</Link></li>
                <li><Link to="/press" onClick={openNav}>Press</Link></li>
                <li><Link to="/contact" onClick={openNav}>Contact</Link></li>
            </ul>
            <div className="socialMediaArea">
                <a className="socialMediaIcon" href="http://www.google.com"><img src='../images/facebook.png' alt="facebook ICON" /></a>
                <a className="socialMediaIcon" href="http://www.google.com"><img src="/images/instagram.png" alt="instagram ICON" /></a>
                <a className="socialMediaIcon" href="http://www.google.com"><img src='https://cdn-icons-png.flaticon.com/512/25/25320.png' alt="linkedin ICON" /></a>

            </div>
        </nav>

        </>
        
    );
}

export default NavBar;