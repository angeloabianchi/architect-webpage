import React, { useState } from "react";
import { Link } from 'react-scroll';






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
      <Link className="" onClick={count} to={pages[number]} smooth={true} duration={1000}>Scroll Down</Link>
    </div>
  );
}

export default Scroll;