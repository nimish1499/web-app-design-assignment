import React, { useEffect, useState }  from "react";
import FeaturesSectionBottom from "../../components/Home/FeaturesSectionBottom";
import FeaturesSectionMiddle from "../../components/Home/FeaturesSectionMiddle";
import FeaturesSectionTop from "../../components/Home/FeaturesSectionTop";

import "../../index.css";

const HomeScreen = () => {
  const [isDesktop, setIsDesktop] = useState("true"); // To check if the current width is for mobile or dektop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsDesktop(false); // Change to mobile screen if width is less than 768px
      } else if (window.innerWidth >= 768) {
        setIsDesktop(true); // Change to desktop screen if width is greater than 768px
      }
    };

    window.addEventListener("resize", handleResize); // Event listener to change the user agent according to the width
    return () => window.removeEventListener("resize", handleResize); // Removing the event Listener when the componsnt unmounts
  }, [isDesktop]);
  

  return (
    <div className="container">
      <FeaturesSectionTop isDesktop={isDesktop}/>
      <FeaturesSectionMiddle/>
      <FeaturesSectionBottom isDesktop={isDesktop}/>
    </div>
  );
};

export default HomeScreen;
