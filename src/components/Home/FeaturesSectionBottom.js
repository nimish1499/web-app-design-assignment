import React from "react";
import styles from "./FeaturesSection.module.css"; // Adjust the path for your CSS module file
import ShowcaseImage from "../../assets/images/showcase.png"; // Path to your image
import BotImage from "../../assets/images/botbot.png";

const FeaturesSectionBottom = ({isDesktop}) => {
  

  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.sectionContainer1}>
          <div className={styles.leftColumn}>
            <h2>Showcase your app in our integrations directory</h2>
            <p>
              Building something special? We're always looking to work with
              partners who wants to help the world bring their ideas to life.
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.buttonLight}>Become a partner</button>
              <button className={styles.buttonDark}>View Integrations</button>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <img
              src={ShowcaseImage}
              alt="Integration visual"
              className={styles.sectionImage}
            />
          </div>
        </div>

        <div className={`${styles.sectionContainer2}`}>
          <div className={styles.leftColumn}>
            <img
              src={BotImage}
              alt="botImage"
              className={styles.sectionImage}
            />
          </div>
          <div className={styles.rightColumn}>
            <h2>{`${
              isDesktop ? "A" : "BotBot - "
            } Slack-bot for creating and managing prototypes`}</h2>
            <p>
              {`${
                !isDesktop
                  ? "Building something special? We're always looking to work with partners who wants to help the world bring their ideas to life."
                  : "Check out our API example BotBot, a bot for creating, viewing, and managing prototypes by simply using Slash Commands in Slack. Grab the code and make your own bot!"
              }`}
            </p>
            <div className={styles.buttonContainer}>
              {isDesktop ? (
                <>
                  <button className={styles.buttonLight}>
                    Become a partner
                  </button>
                  <button className={styles.buttonDark}>
                    View Integrations
                  </button>
                </>
              ) : (
                <>
                  <button className={styles.buttonLight}>View on Github</button>
                  <button className={styles.buttonDark}>Try the demo</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSectionBottom;
