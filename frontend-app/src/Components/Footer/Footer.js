import React from "react";
import './Footer.css';
import Scroll from "../Scroll/Scroll";

const Footer = () => {

    const pathname = window.location.pathname;
    

    if(pathname === '/') {
        return (
            <div className="footerContainer">
                <div className="projectName"><h3>Project Name</h3></div>
                <div className="scroll"><Scroll /></div>
                <div className="viewButton"><h3>View Project</h3></div>
            </div>
        );
    }
    if (pathname === '/projectOne') {
        return (
            <div>aaa</div>
        );
    }


}

export default Footer;