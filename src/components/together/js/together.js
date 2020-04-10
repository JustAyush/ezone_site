import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import { BrowserRouter as Router, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../scss/together.module.scss";

class ToContact extends Component {
  render() {
    return (
      <div className={styles.toContactOuter}>
        <div className={styles.toContactInner}>
          <div className={`row ${styles.toContactGrid}`}>
            <div className={`col-sm-12 col-md-12 col-lg-5`}>
              <Fade big>
                <p className={styles.betterTogether}>We're better together</p>
              </Fade>
            </div>
            <div className={`col-sm-12 col-md-12 col-lg-7`}>
              <div className={`row ${styles.toContactSubSection}`}>
                <div className={`col-sm-12 col-md-6 col-lg-6 pr-md-3 pr-lg-2`}>
                  <Fade top>
                    <div className={styles.subSection}>
                      <p className={styles.heading}>
                        Become a <br />
                        client
                      </p>
                      <p className={styles.content}>
                        {" "}
                        Partner with us today to change how tomorrow looks.
                        You're exactly what's needed.
                      </p>
                      <Link to="/contact" className={styles.link}>
                        Contact us{" "}
                        <FontAwesomeIcon
                          icon={faLongArrowAltRight}
                          className={styles.icon}
                        />
                      </Link>
                    </div>
                  </Fade>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-6  pl-md-3 pl-lg-2`}>
                  <Fade bottom>
                    <div className={styles.subSection}>
                      <p className={styles.heading}>
                        Design your <br />
                        career
                      </p>
                      <p className={styles.content}>
                        {" "}
                        Partner with us today to change how tomorrow looks.
                        You're exactly what's needed.
                      </p>
                      <Link to="/contact" className={styles.link}>
                        Join our team{" "}
                        <FontAwesomeIcon
                          icon={faLongArrowAltRight}
                          className={styles.icon}
                        />
                      </Link>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToContact;
