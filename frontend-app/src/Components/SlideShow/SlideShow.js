import React from "react";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
//import './SlideShow.css';



const SlideShow = ({projects}) => {
      return (
        <Carousel fade>

            {projects.map((slide, index) => {
                return (
                    <Carousel.Item style={{ transition: '1s'}} >
                        <Link to={"/projects/" + slide.id}>
                            <img className="" src={slide.proj_img} alt={slide.title} />
                        </Link>
                        <Carousel.Caption>
                            <h3>{slide.title}</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>
      );
}

export default SlideShow;