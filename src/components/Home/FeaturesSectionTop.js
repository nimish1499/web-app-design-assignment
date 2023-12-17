import React from "react";
import styles from "./FeaturesSection.module.css";
import IllustrationImage from "../../assets/images/illustration.png";

const FeaturesSectionTop = ({isDesktop}) => {
 

  return (
    <>
      <div className={styles.imageContainer}>
        <div className={`${styles.sectionContainer2}`}>
          <div className={styles.bigLeftColumn}>
            <h2>{`Let's build the future of design, ${
              isDesktop ? "now" : "together"
            }`}</h2>
            <p>
              {`Create amazing Tools and integration for ${
                isDesktop ? "1" : "over 2"
              } million users or
              customise Marvel for your ${isDesktop ? "" : "own"} team`}
            </p>

            <div className={styles.buttonDiv}>
              {isDesktop ? ( // Changeing the content on screen depending upon the mobile/desktop view
                <>
                  <button className={styles.buttonBlue}>Submit your app</button>
                  <button className={styles.buttonLight}>View api Docs</button>
                </>
              ) : (
                <>
                  <button className={styles.buttonLight}>View the Docs</button>
                  <button className={styles.buttonDark}>Manage Apps</button>
                </>
              )}
            </div>
          </div>
          <div className={styles.bigRightColumn}>
            <img
              src={IllustrationImage}
              alt="IllustrationImage"
              className={styles.sectionImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <h2>Experience the freedom to build features, right away</h2>
        <p>
          You can now harness components of our platform and build powerful
          integration for our 2 million users - or simply just for you team.
        </p>
      </div>
    </>
  );
};

export default FeaturesSectionTop;
