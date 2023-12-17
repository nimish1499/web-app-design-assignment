import React from "react";
import styles from "./FeaturesSection.module.css";

import ApiTeamImage from "../../assets/images/apiTeam.png";
import GraphQLImage from "../../assets/images/graphQL.png";
import WorkflowImage from "../../assets/images/superchargeWorkflow.png";

const FeaturesSectionMiddle = () => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.feature}>
        <img
          src={ApiTeamImage}
          alt="Dedicated API Team"
          className={styles.featureImage}
          loading="lazy"
        />
        <h3 className={styles.featureTitle}>Dedicated API Team</h3>
        <p className={styles.featureDescription}>
          Our team are available for user's questions via our Slack Developer
          Community and Email.
        </p>
      </div>
      <div className={styles.feature}>
        <img
          src={GraphQLImage}
          alt="Our API uses GraphQL"
          className={styles.featureImage}
        />
        <h3 className={styles.featureTitle}>Our API uses GraphQL</h3>
        <p className={styles.featureDescription}>
          No handling server side. Get many API's responses in a single request.
        </p>
      </div>
      <div className={styles.feature}>
        <img
          src={WorkflowImage}
          alt="Supercharge your workflow"
          className={styles.featureImage}
          loading="lazy"
        />
        <h3 className={styles.featureTitle}>Supercharge your workflow</h3>
        <p className={styles.featureDescription}>
          Automate workflows, integrate and analyse data and take Marvel to the
          next level.
        </p>
      </div>
    </div>
  );
};

export default FeaturesSectionMiddle;
