import React from "react";
import './About.css';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/baixa.png';
import planningImage from '../../Components/images/planning.png';
import interior from '../../Components/images/interior.png';
import exterior from '../../Components/images/exterior.png';
import videoAbout from'../../Components/images/aboutVideo.mp4';

const About = () => {
    return (
        <div className="about-page-container">
            <div className="AboutPageContent" id="about">
                <video loop autoPlay className="video">
                    <source
                    src={videoAbout}
                    type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="aboutContent">
                    <h4>ABOUT ME</h4>
                    <h1>I'm focus on creative work and shared knowledge</h1>
                </div>
                <div className="aboutItems">
                    <div className="item">
                        <div><img className="" src={planningImage} alt="Planning Icon" /></div>
                        <h1>Planning</h1>
                        <h4>jsadjlad ksj askdpq kshdk ksjnqa ksjdiq kajusiqpnos kiajqos ksndhq kshdua</h4>
                    </div>
                    <div className="item">
                        <div><img className="" src={interior} alt="Interior Icon" /></div>
                        <h1>Interior</h1>
                        <h4>laoq siqi slfnqyj soahehw lsjduq lsjfiq shdiqhowqoe ksbqj soqons anglianwid asien ajghsi akbyanw isbfgqoqbs ksawbe</h4>
                    </div>
                    <div className="item">
                        <div><img className="" src={exterior} alt="Exterior Icon" /></div>
                        <h1>Exterior</h1>
                        <h4>Sjdhiq sjqn skjqowoieq sjbahuq skdqi sjquhw sjdhiq  sjhaiqwndo ashiujw sjahhwdiuhqw jashdiuqhwd asudhq</h4>
                    </div>
                </div>

            </div>

            <div className="about-footer">
                <div className="scrollButton">
                    <ScrollLink className="scrollLink" to="press" smooth={true} duration={1000}><img className="imageScl" src={imageScroll} alt="scroll symbol" /></ScrollLink>
                </div>
            </div>
        </div>

    )
}

export default About;