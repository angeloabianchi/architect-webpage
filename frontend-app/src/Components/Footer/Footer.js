import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="projectName"><h3>Project Name</h3></div>
            <div className="scrollButton"><button>Scroll</button></div>
            <div className="viewButton"><h3>View Project</h3></div>
        </div>
    );
}

export default Footer;