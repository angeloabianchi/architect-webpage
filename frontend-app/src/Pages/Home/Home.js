import React, {useEffect} from "react";
import './Home.css';
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../../Components/images/baixa.png';
import videoHome from '../../Components/images/videoHome.mp4';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {

    const location = useLocation();
    const stateId = location.state;

    // scroll down to a div 'id' if exists a location.state (stateId)
    useEffect(() => {  
        var element = document.getElementById(stateId);
        if(element) {
            element.scrollIntoView({block: "end", behavior: "smooth"});
        }  
    }, [stateId]);

    return (
        <div className="HomePageContainer">
                <div className="HomePageContent" id="home">
                    <div className="home">
                        <video loop autoPlay className="video">
                            <source
                            src={videoHome}
                            type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            
                <div className="home-footer">
                    <div className="scrollButton">
                        <ScrollLink className="scrollLink" to="projectsPage" smooth={true} duration={1000}><img className="imageScl" src={imageScroll} alt="scroll symbol" /></ScrollLink>
                    </div>
                </div>
                
        </div>

    )
}

export default Home;