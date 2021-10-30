import React from "react";
import './Footer.css';
import Scroll from "../Scroll/Scroll";

const Footer = () => {


    return (
        <div className="footerContainer">
            <div className="projectName"><h3>Project Name</h3></div>
            <div className="scroll"><Scroll /></div>
            <div className="viewButton"><h3>View Project</h3></div>
        </div>
    );
}

export default Footer;