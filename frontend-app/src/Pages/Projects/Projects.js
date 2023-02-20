import React, { useEffect, useState } from "react";
import './Projects.css';
//import SlideShow from '../../Components/SlideShow/SlideShow';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/baixa.png';
import SlideProjects from "../../Components/SlideShow/SlideProjects";
import SlideShow from "../../Components/SlideShow/SlideShow";



const Projects = () => {

    const [projects, setProjects] = useState([]);
    
    const url = "http://127.0.0.1:80/api/projects";

    const fetchData = () => {
        return fetch(url, { withCredentials: true })
              .then((response) => response.json())
              .then((data) => setProjects(data));
      }
    
      useEffect(() => {
        fetchData();
      }, [])


    return (

        <div className="project-page-container">  

            <div className="ProjectPageContent" id="projectsPage">
                {projects && <SlideShow projects={projects}/>}
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