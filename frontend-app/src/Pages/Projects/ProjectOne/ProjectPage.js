import React, {useState, useEffect} from "react";
import './ProjectPage.css';
import Contact from '../../Contact/Contact';


const ProjectPage = (props) => {

    const {match} = props;
    const projId = match.params.id;

    const [projects, setProjects] = useState('');
    
    //const url = "http://localhost:80/projects";


    useEffect(() => {
        const url = "http://127.0.0.1:80/api/projects/" + projId;
        window.scrollTo(0, 0)
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setProjects(data);
            })
            .catch(error => {
                console.log("Error fetching data:", error);
            });
    }, [projId]);

    //const project = projects && projId && projects[projId - 1];
    // const photos = project && project.images;

    if (!projects) {
        // Data has not been received yet, show a loading indicator
        return <div>Loading...</div>
    }

    const project = projects[0];

    return(

        <div className="projectContainer">
            <div className="projectContent">
                <div className="pageOne">
                    {<img className="photo" src={project.proj_img} width="300px" alt="Project 1"/>}
                </div>
                <div className="pageTwo">
                    <div className="leftSection">
                        <div className="projectInfo">
                            <h3>ARCHITECTURE/DESIGN</h3>
                            <h4>{project.designer}</h4>
                            <h3>YEAR</h3>
                            <h4>{project.year}</h4>
                            <h3>TYPOLOGY</h3>
                            <h4>{project.typology}</h4>
                        </div>
                        <div className="projectDescription">
                            <h4>{project.description}</h4>
                        </div>
                        <div className="projectPlano">
                            {/* <img className="" src={photos[1]} width="450px" /> */}
                        </div>
                    </div>
                    <div className="rightSection">
                        <div className="photoContainer">
                            {/* <img className="photoTwo" src={photos[1]} width="50px" alt="Papeis enrolados"/> */}
                        </div>
                        <div className="photoContainer">
                            {/* <img className="photoTwo" src={photos[1]} width="50px" alt="Papeis enrolados"/> */}
                        </div>
                    </div>
                </div>
                <div className='pageThree'>
                    <div className='leftSection'>
                        {/* <img className="photoThree" src={photos[2]} width="300px" alt="Papeis enrolados"/> */}
                    </div>
                    <div className='rightSection'>
                        <h2>{project.title}</h2>
                        <h3>{project.text}</h3>
                    </div>
                </div>

                <div className="footer">

                    <Contact />

                </div>
                
            </div>



        </div>
    );
}

export default ProjectPage;