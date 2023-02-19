import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { AiOutlineRight, AiOutlineLeft} from "react-icons/ai";
import './SlideProjects.css';

const SlideProjects = ({projects}) => {

    const [current, setCurrent] = useState(0);
    const length = projects.length;

    //if data do not exist, return null
    if(!Array.isArray(projects) || projects.length <= 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <section className="slider">

            <AiOutlineLeft className="left-arrow" onClick={prevSlide} />
            <AiOutlineRight className="right-arrow" onClick={nextSlide} />

            {projects.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <div className="slideBox">
                                <Link to={"/project/" + slide.id}><img className="projectImage" src={slide.proj_img} width="300px" alt={slide.title}/></Link>
                                <div className="textSlide"><p>{slide.title}</p></div>
                            </div>
                        )}
                    </div>
                )
            })}
        </section>
    );

}

export default SlideProjects;