import React, {useRef, useEffect} from "react";
import photoProjectOne from '../images/fotoPapeisEnrolados.jpg';
import projectTwo from '../images/predioCortado.jpg';
import projectThree from '../images/escadasBonitas.jpg';
import projectFour from '../images/predioTorto.jpg';
import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';
import './SlideShow.css';
import { Link } from 'react-router-dom';





const SlideShow = () => {

    const slides = useRef(null);
    const intervaloSlides = useRef(null);

    const nextSlide = () => {
        // slides tem mais elementos?
        if(slides.current.children.length > 0) {
            // Pegamos o primeiro elemento de slides
            const firstElement = slides.current.children[0];
            // Estabelecemos a transição para os slides
            slides.current.style.transition = `1000ms ease-out all`;
            // Calculamos o tamanho width da imagem
            const slideSize = slides.current.children[0].offsetWidth;
            // Movemos os slides
            slides.current.style.transform = `translateX(-${slideSize}px)`;
            // Função que espera a transição do primeiro slide pra depois mudar a posição do slide anterior para a ultima posição.
            const transition = () => {
                // Depois de apertar o botão, mudar o slide[0] de posição
                slides.current.style.transition = 'none';
                slides.current.style.transform = `translateX(0)`;

                // Pegamos o primeiro slide e movemos ao final da fila. appendChild agrega um elemento ao final da fila de slides
                slides.current.appendChild(firstElement);

                slides.current.removeEventListener('transitionend', transition);
            }
            // Eventlistener para cuando termina a animação
            slides.current.addEventListener('transitionend', transition);
        }
    }

    const previewSlide = () => {
        if(slides.current.children.length > 0){
            // Obter o último elemento da fila de slides
            const elements = slides.current.children.length - 1;
            const lastElement = slides.current.children[elements];
            // Insert the lastChild element before the first eçe,emt
            slides.current.insertBefore(lastElement, slides.current.firstChild);
            // Criando uma const que tenha o tamanho do slide
            const slideSize = slides.current.children[0].offsetWidth;
            slides.current.style.transition = 'none';
            slides.current.style.transform = `translateX(-${slideSize}px)`;

            setTimeout(() => {
                slides.current.style.transition = '1000ms ease-out all';
                slides.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    // muda de slide automatico a cada 5 segundos e só se utiliza a função setInterval quando se renderiza a página
    useEffect(() => {
        intervaloSlides.current = setInterval(() => {
            nextSlide();
        }, 5000);

        // Eliminar o setInterval quando o mouse estiver emcima do slide
        slides.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlides.current);
        });

        // Voltar com o intervalo de 5s se o mouse estiver fora do slide
        slides.current.addEventListener('mouseleave', () => {
            intervaloSlides.current = setInterval(() => {
                nextSlide();
            }, 5000);
        });
    }, []);

    return(
        <div className="MainContainer">
            <div ref={slides} className="SlideShowContainer">
                <div className="slide">
                    <Link to="/projectOne"><img className="projectImage" src={photoProjectOne} width="300px" alt="Papeis enrolados"/></Link>
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
                <div className="arrowButton left" onClick={previewSlide}><img src={leftArrow} alt="Left Arrow" /></div>
                <div className="arrowButton right" onClick={nextSlide}><img src={rightArrow} alt="Right Arrow" /></div>
            </div>
        </div>
    );
}

export default SlideShow;