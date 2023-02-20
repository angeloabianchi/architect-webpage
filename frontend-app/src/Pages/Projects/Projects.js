import React, { useEffect, useState } from "react";
import './Projects.css';
//import SlideShow from '../../Components/SlideShow/SlideShow';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/baixa.png';
import SlideProjects from "../../Components/SlideShow/SlideProjects";
import axios from 'axios';



const Projects = () => {

    const [projects, setProjects] = useState([]);
    
    const url = "http://127.0.0.1:80/api/projects";
    //const url = "http://127.0.0.1:80/projects";
    
    // useEffect(() => {
    //     fetch(url, {mode:'cors'})
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             setProjects(data);
    //         });
    // }, []);

    const fetchData = () => {
        return fetch(url)
              .then((response) => response.json())
              .then((data) => setProjects(data));
      }
    
      useEffect(() => {
        fetchData();
      },[])

    // useEffect(() => {
    //     axios.get(url)
    //     .then(response=>{
    //         setProjects(response.data);
    //     })
    // }, [])


    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get(url, { withCredentials: true }, {
    //           headers: {
    //             'Access-Control-Allow-Origin': '*'
    //           }
    //         });
    //         setProjects(response.data.projects);
    //         console.log(response.data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    //     fetchData();
    //   }, [projects]);

    // axios.get(url, { withCredentials: true })
    // .then(response => {
    //     setProjects(response.data);
    // })
    // .catch(error => {
    //     console.log(error);
    // });


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