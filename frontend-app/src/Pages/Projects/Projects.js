import React, { useEffect, useState } from "react";
import './Projects.css';
//import SlideShow from '../../Components/SlideShow/SlideShow';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/baixa.png';
import SlideProjects from "../../Components/SlideShow/SlideProjects";



const Projects = () => {

    const [projects, setProjects] = useState(null);
    
    //const url = "http://localhost:80/api/projects";
    const url = "http://localhost:8000/projects";
    
    useEffect(() => {
        fetch(url, {mode:'cors'})
            .then(response => {
                return response.json();
            })
            .then(data => {
                setProjects(data);
            });
    }, []);

    return (

        <div className="project-page-container">  

            <div className="ProjectPageContent" id="projectsPage">
                {projects && <SlideProjects projects={projects}/>}
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