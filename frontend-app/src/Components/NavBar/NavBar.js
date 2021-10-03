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
            <Link to="/" className="name">Fl.ando</Link>
            <Link to="#" className="menu-bars">
                <FaBars className={hide ? 'menu-button-active' : 'menu-button-hide'} onClick={openNav} sidebar={sidebar} />
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={openNav}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'><AiOutlineClose /></Link>
                </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/press">Press</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

        </>
        
    );
}

export default NavBar;