import React from "react";
import './Home.css';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Press from '../Press/Press';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className="HomePageContent">

            <div className="home">
                
            </div>
            
            <div className="projects">
                <Projects />
            </div>

            <div className="about">
                <About />
            </div>

            <div className="press">
                <Press />
            </div>

            <div className="contact">
                <Contact />
            </div>
        
        </div>
    )
}

export default Home;