import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

import styles from "../scss/services.module.scss";

class Service extends Component {
  render() {
    return (
      <div className={styles.serviceOuterContainer}>
        <div className={styles.serviceContainer}>
          <div className={styles.ourServices}>Our Services</div>
          <div className={`row no-gutters ${styles.serviceGrid}`}>
            <Fade left>
              <div
                className={`col-sm-12 col-md-6 col-lg-4 pr-lg-3 pr-md-2 ${styles.outerService}`}
              >
                <div className={` ${styles.innerService}`}>
                  <FontAwesomeIcon icon={faLaptop} className={styles.icon} />
                  <p>CUSTOM SOFTWARE DEVELOPMENT</p>
                  <p className={styles.description}>
                    {" "}
                    Cross-platform mobile apps for consumer and corporate
                    enviroments
                  </p>
                </div>
              </div>
            </Fade>
            <Fade big>
              <div
                className={`col-sm-12 col-md-6 col-lg-4 pl-lg-2 pr-lg-2 pl-md-2 ${styles.outerService}`}
              >
                <div className={` ${styles.innerService}`}>
                  <FontAwesomeIcon icon={faLaptop} className={styles.icon} />
                  <p>CUSTOM SOFTWARE DEVELOPMENT</p>
                  <p className={styles.description}>
                    {" "}
                    Cross-platform mobile apps for consumer and corporate
                    enviroments
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div
                className={`col-sm-12 col-md-6 col-lg-4 pl-lg-3 pr-md-2 pr-lg-0 ${styles.outerService}`}
              >
                <div className={` ${styles.innerService}`}>
                  <FontAwesomeIcon icon={faLaptop} className={styles.icon} />
                  <p>CUSTOM SOFTWARE DEVELOPMENT</p>
                  <p className={styles.description}>
                    {" "}
                    Cross-platform mobile apps for consumer and corporate
                    enviroments
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          <button
            className={`btn btn-default shadow-none ${styles.moreBtn}`}
            onClick={() =>
              this.props.history.push({
                pathname: `/services`
              })
            }
          >
            {" "}
            View More
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Service);
