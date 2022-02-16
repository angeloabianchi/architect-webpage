import React, {useState, useEffect} from "react";
import './ProjectPage.css';


const ProjectPage = (props) => {

    const {match} = props;
    const id = match.params.id;

    const [projects, setProjects] = useState('');
    
    const url = "http://localhost:8000/projects";

    useEffect(() => {
        window.scrollTo(0, 0)
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setProjects(data);
            });
    }, []);

    const project = projects && id && projects[id - 1];
    const photos = project && project.images;

    return(

        <div className="projectContainer">
            <div className="projectContent">
                <div className="pageOne">
                    {projects && id && <img className="photo" src={project.imgUrl} width="300px" alt="Papeis enrolados"/>}
                </div>
                <div className="pageTwo">
                    <div className="leftSection">
                        <div className="projectInfo">
                            <h2>CLIENT</h2>
                            <h3>{project.client}</h3>
                            <h2>LOCATION</h2>
                            <h3>{project.location}</h3>
                            <h2>CATEGORY</h2>
                            <h3>{project.category}</h3>
                            <h2>PHOTOGRAPHY</h2>
                            <h3>{project.photography}</h3>
                            <h2>ARTISANRY</h2>
                            <h3>{project.art}</h3>
                        </div>
                        <div className="projectDescription">
                            <h3>{project.description}</h3>
                        </div>
                    </div>
                    <div className="rightSection">
                        <img className="photoTwo" src={photos[1]} width="300px" alt="Papeis enrolados"/>
                    </div>
                </div>
                <div className='pageThree'>
                    <div className='leftSection'>
                        <img className="photoThree" src={photos[2]} width="300px" alt="Papeis enrolados"/>
                    </div>
                    <div className='rightSection'>
                        <h2>{project.title}</h2>
                        <h3>{project.text}</h3>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ProjectPage;