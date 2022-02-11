import React, {useState, useEffect} from "react";
import './ProjectOnePage.css';


const ProjectOnePage = (props) => {

    const {match} = props;
    const id = match.params.id;

    // Renderizar na pageOne <-------------- está mal!! renderiza quando abro o menu e estou na pagina 2 ou 3 e sobe para a primera pagina.
    window.scrollTo(0, 0);

    const [projects, setProjects] = useState('');
    
    const url = "http://localhost:8000/projects";

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setProjects(data);
            });
    }, []);

    console.log('id:' + id);
    console.log(projects[id]);

    const project = projects && id && projects[id - 1];
    const photos = project && project.images;

    console.log(photos);

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

export default ProjectOnePage;