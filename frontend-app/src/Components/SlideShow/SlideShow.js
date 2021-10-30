import React from "react";
import projectOne from '../images/fotoPapeisEnrolados.jpg';
import projectTwo from '../images/predioCortado.jpg';
import projectThree from '../images/escadasBonitas.jpg';
import projectFour from '../images/predioTorto.jpg';
import './SlideShow.css'

const SlideShow = () => {
    return(
        <div className="MainContainer">
            <div className="SlideShowContainer">
                <div className="slide">
                    <a href="www.google.com"><img className="projectImage" src={projectOne} width="300px" alt="Papeis enrolados"/></a>
                    <div className="textSlide"><p>Proyecto 1</p></div>
                </div>
                <div className="slide">
                    <a href="www.google.com"><img className="projectImage" src={projectTwo} width="300px" alt="Papeis enrolados"/></a>
                    <div className="textSlide"><p>Proyecto 2</p></div>
                </div>
                <div className="slide">
                    <a href="www.google.com"><img className="projectImage" src={projectThree} width="300px" alt="Papeis enrolados"/></a>
                    <div className="textSlide"><p>Proyecto 3</p></div>
                </div>
                <div className="slide">
                    <a href="www.google.com"><img className="projectImage" src={projectFour} width="300px" alt="Papeis enrolados"/></a>
                    <div className="textSlide"><p>Proyecto 4</p></div>
                </div>
            </div>
            <div className="Controls">
                <div className="button">Esq</div>
                <div className="button">Dir</div>
            </div>
        </div>
    );
}

export default SlideShow;