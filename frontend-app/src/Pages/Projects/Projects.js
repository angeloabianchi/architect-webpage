import React from "react";
import './Projects.css';
import SlideShow from '../../Components/SlideShow/SlideShow';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/LogoFlavia0.png';



const Projects = () => {

    return (

        <div className="project-page-container">  

            <div className="ProjectPageContent" id="projects">
                <SlideShow />
            </div>

            <div className="project-footer">
                <div className="scrollButton">
                    <ScrollLink className="scrollLink" to="about" smooth={true} duration={1000}><img className="imageScl" src={imageScroll} alt="scroll symbol" /></ScrollLink>
                </div>
            </div>

        </div>


    )
}

export default Projects;