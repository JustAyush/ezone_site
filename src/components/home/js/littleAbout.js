import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import styles from "../scss/littleAbout.module.scss";

class LittleAbout extends Component {
  render() {
    return (
      <div className={styles.littleAboutContainer}>
        <div className={`row`}>
          <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4`}>
            <Fade left>
              <div className={styles.beyond}>BEYOND </div>
              <div className={styles.engineering}>ENGINEERING</div>
              <div className={styles.subtitle}>MASTERING COMPLEXITY</div>
            </Fade>
          </div>
          <div
            className={`col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 pl-lg-1`}
          >
            <div>
              <Fade right>
                <p className={styles.littleAboutContent}>
                  What makes us different is the way we work and the way we
                  thank. We stay ahead of the current curve by connecting
                  technology and data. It is how we generate the knowledge, the
                  ingenuity and the drive to meet so manu of today's most
                  pressing challenges.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LittleAbout;
