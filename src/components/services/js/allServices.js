import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

import styles from "../scss/allServices.module.scss";

class AllService extends Component {
  render() {
    return (
      <div className={styles.serviceOuterContainer}>
        <div className={styles.dividerInside}></div>
        <div className={styles.serviceContainer}>
          <div className={styles.ourServices}>Our Services</div>

          {/* Grid view to show services offered */}
          <div className={styles.gridParent}>
            <div className={`${styles.gridChild} ${styles.gridChild1}`}>
              <div className={` ${styles.innerService}`}>
                <div>
                  <FontAwesomeIcon icon={faLaptop} className={styles.icon} />
                </div>
                <p>CUSTOM SOFTWARE DEVELOPMENT</p>
                <p className={styles.description}>
                  {" "}
                  Cross-platform mobile apps for consumer and corporate
                  enviroments
                </p>
              </div>
            </div>
            <div className={`${styles.gridChild} ${styles.gridChild2}`}>
              {" "}
              <div className={` ${styles.innerService}`}>
                <div>
                  <FontAwesomeIcon icon={faLaptop} className={styles.icon} />
                </div>
                <p>CUSTOM SOFTWARE DEVELOPMENT</p>
                <p className={styles.description}>
                  {" "}
                  Cross-platform mobile apps for consumer and corporate
                  enviroments
                </p>
              </div>
            </div>
            <div className={`${styles.gridChild} ${styles.gridChild3}`}>
              {" "}
              <div className={` ${styles.innerService}`}>
                <div>
                  <FontAwesomeIcon icon={faLaptop} className={styles.icon} />
                </div>
                <p>CUSTOM SOFTWARE DEVELOPMENT</p>
                <p className={styles.description}>
                  {" "}
                  Cross-platform mobile apps for consumer and corporate
                  enviroments
                </p>
              </div>
            </div>
            <div className={`${styles.gridChild} ${styles.gridChild4}`}>
              {" "}
              <div className={` ${styles.innerService}`}>
                <div>
                  <FontAwesomeIcon icon={faLaptop} className={styles.icon} />
                </div>
                <p>CUSTOM SOFTWARE DEVELOPMENT</p>
                <p className={styles.description}>
                  {" "}
                  Cross-platform mobile apps for consumer and corporate
                  enviroments
                </p>
              </div>
            </div>
            <div className={`${styles.gridChild} ${styles.gridChild5}`}>
              {" "}
              <div className={` ${styles.innerService}`}>
                <div>
                  <FontAwesomeIcon icon={faLaptop} className={styles.icon} />
                </div>
                <p>CUSTOM SOFTWARE DEVELOPMENT</p>
                <p className={styles.description}>
                  {" "}
                  Cross-platform mobile apps for consumer and corporate
                  enviroments
                </p>
              </div>
            </div>
            <div className={`${styles.gridChild} ${styles.gridChild6}`}>
              {" "}
              <div className={` ${styles.innerService}`}>
                <div>
                  <FontAwesomeIcon icon={faLaptop} className={styles.icon} />
                </div>
                <p>CUSTOM SOFTWARE DEVELOPMENT</p>
                <p className={styles.description}>
                  {" "}
                  Cross-platform mobile apps for consumer and corporate
                  enviroments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dividerInside}></div>
      </div>
    );
  }
}

export default AllService;
