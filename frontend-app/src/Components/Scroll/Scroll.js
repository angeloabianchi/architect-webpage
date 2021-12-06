import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import imageScroll from '../images/LogoFlavia0.png';
import './Scroll.css';


const Scroll = () => {

  const pages = ['home', 'projects', 'about', 'press', 'contact'];
  const [number, setNumber] = useState(1);

  const count = () => {
    if (number < 5) {
      setNumber(number + 1);
    }
    else {
      setNumber(number-number);
    }
    
  }

  return(
    <div className="scrollButton">
      <ScrollLink className="scrollLink" onClick={count} to={pages[number]} smooth={true} duration={1000}><img className="imageScl" src={imageScroll} alt="scroll symbol" /></ScrollLink>
    </div>
  );
}

export default Scroll;