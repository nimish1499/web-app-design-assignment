import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavVisible(false);
      }
      // else{
      //   setIsNavVisible(true)
      // }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavVisible]);

  return (
    <div className="header">
      <div className="logo-container">
        <svg width="70" height="34" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Layer 1</title>
            <path
              id="svg_1"
              d="m59.1,21.41587c-25.1,-2 -45.8,4.1 -50.5,6.4c-2.6,1.2 -2.8,2.7 -2.4,3.5c0.3,0.6 1.6,1 2.9,0.3c10,-5.4 30.1,-9.7 50,-8.5c0.5,0 0.9,-0.4 0.9,-0.9c0,-0.4 -0.4,-0.8 -0.9,-0.8l0,0zm6.2,-7.6c-1.1,1.2 -2.6,2.1 -3.1,1.7s0,-1.9 0,-1.9c2.5,-1.6 7.3,-5.7 7.3,-8.9c0,-2.9 -2.6,-3.8 -5.3,-1.1c-2.2,2.4 -3.8,5.4 -4.7,8.6c-1.4,1.4 -3.7,3.2 -5.7,3.2c-1.1,0 -1.3,-0.8 -1.2,-1.8c1.7,0 6.5,-1.4 6.5,-5.4c0,-0.7 -0.3,-1.3 -0.8,-1.8c-0.5,-0.5 -1.1,-0.7 -1.8,-0.6c-2.2,0 -4.9,2.2 -6.3,5.4c-0.3,-0.1 -0.7,-0.2 -1,-0.4c0.4,-0.8 0.6,-1.6 0.9,-2.4c0.3,-1.7 -0.4,-2.7 -1.7,-2.5c-0.9,0 -1.9,0.8 -2.2,2.5c-0.1,0.9 0.1,1.8 0.4,2.5c-0.6,1.9 -3,4.2 -3.8,4.1c-0.8,-0.1 0.1,-3.4 0.9,-5.9c0.5,-0.5 0.8,-1 1.1,-1.7c0.2,-0.5 0.1,-1.1 -0.4,-1.3c-1.2,-0.5 -2.6,0.1 -3.1,1.3c-0.3,0.6 -0.6,1.2 -0.9,1.9c-0.7,0.8 -1.7,1.9 -2,1.8c-0.4,-0.3 1.1,-2.3 0.9,-3.5c-0.1,-0.9 -1,-1.6 -1.9,-1.5c-1.4,0.2 -3.1,2.8 -3.1,2.8c0.2,-0.5 0.3,-1 0.4,-1.5c-0.1,-1 -1.9,-1.4 -2.8,0.4c-0.6,1.7 -1.1,3.5 -1.3,5.3c-0.4,0.8 -1.9,3.2 -3.1,3.3c-1,0.1 0.2,-4.3 0.4,-4.5c0.5,-0.8 1.2,-2.5 1.1,-3.3c0,-0.4 -0.1,-0.7 -0.4,-0.9c-0.3,-0.2 -0.7,-0.3 -1,-0.2c-0.6,0.2 -1.1,0.6 -1.4,1.1c-0.4,-0.5 -1.1,-0.8 -1.8,-0.7c-4,0.4 -6.5,7.4 -6.2,10.7c0.2,1.8 1.1,2.9 2.6,2.6c1.7,-0.2 3.1,-2.8 3.1,-2.8s0.4,2.1 2.3,1.9c1.4,-0.4 2.6,-1.3 3.5,-2.5c0,0.1 -0.1,0.2 -0.1,0.4c-0.3,1.8 2.6,1.6 2.8,0.2c0.9,-6.7 3.1,-9.4 3.7,-9.4c0.5,0 -1.4,3.1 -0.3,4.4c0.9,1 2.4,0.2 3.7,-0.9c-0.2,0.8 -0.3,1.7 -0.4,2.5c-0.1,1.9 0.6,3.4 2.4,3.3c2.4,-0.1 4.9,-3.1 6.6,-5.9c0.4,0.3 0.9,0.5 1.4,0.6c-0.2,0.7 -0.2,1.4 -0.2,2c0.1,2.2 1.6,3 3.4,2.9c2,-0.1 4.4,-1.6 6,-3.1c0,0.1 0,0.2 -0.1,0.2c-0.1,1.1 0.1,3 1.6,3.1c1.7,0.1 4.7,-1.6 6.2,-3.5c1.1,-0.6 -0.2,-1.8 -1.1,-0.8l0,0l0,0zm1.6,-9c0.2,0 0.3,0.2 0.3,0.4c0,1.9 -4.6,5.8 -4.6,5.8s3,-6.2 4.3,-6.2l0,0zm-11.2,3.9c0.2,0 0.3,0 0.4,0.2s0.1,0.3 0.1,0.4c0,1.1 -1.4,1.9 -3,1.9c0.9,-1.3 1.8,-2.5 2.5,-2.5l0,0zm-31,2.9c-0.1,1.1 -2.1,6.2 -3.1,6.2c-1.3,0.1 0.7,-7.1 2.8,-7.1c0.4,0 0.4,0.3 0.3,0.9l0,0zm-16.9,1.4c1.3,0 -1.1,6.7 -0.8,9.6s3.5,2.1 3.3,0.4c-0.4,-2.9 1.6,-12 3.5,-12c1.4,0 -1.6,6.2 -1,10.1c0.4,2.5 3.8,1.8 3.4,0.1c-1.1,-5.1 2.5,-10 2,-13.6c-0.2,-1.5 -1.1,-2.3 -2,-2.3c-3.2,0 -5.8,6.6 -5.8,6.6s0.4,-3.7 -2.3,-3.9c-3.8,-0.2 -7.7,9.4 -7.6,18.1c0.1,2.8 3.5,2.3 3.3,0.1c-0.2,-3.9 2,-13.2 4,-13.2l0,0z"
              fill="#fff"
            />
          </g>
        </svg>
        <span className="logo-text"> |  Developers</span>
      </div>
      <button
        className="hamburger"
        onClick={toggleNav}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>
      <nav className={`navigation ${isNavVisible ? "visible" : ""}`} 
      // style={{display:isNavVisible? "block":"none"}}
      >
        {isNavVisible && <button
          className="close-btn"
          onClick={toggleNav}
          aria-label="Close menu"
        >
          &times;
        </button>}
        <a href="#why-marvel" className="nav-link">
          Why Marvel 
        </a>
        <a href="#enterprise" className="nav-link">
          Enterprise
        </a>
        <a href="#pricing" className="nav-link">
          Pricing
        </a>
        <a href="#sign-in" className="nav-link">
          Sign In
        </a>
        <button className="sign-up-btn">Sign up free</button>
      </nav>
    </div>
  );
};

export default Header;
