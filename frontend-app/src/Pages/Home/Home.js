import React from "react";
import './Home.css';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/baixa.png';

const Home = () => {
    return (
        <div className="HomePageContainer">
                <div className="HomePageContent" id="home">
                    <div className="home">
                        
                    </div>
                </div>


                <div className="home-footer">
                    <div className="scrollButton">
                        <ScrollLink className="scrollLink" to="projects" smooth={true} duration={1000}><img className="imageScl" src={imageScroll} alt="scroll symbol" /></ScrollLink>
                    </div>
                </div>
        </div>

    )
}

export default Home;