import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import styles from "../scss/footer.module.scss";

import logo from "../../../assets/images/logoBlack.png";

class Footer extends Component {
  render() {
    return (
      <div className={styles.footerSection}>
        {/* <hr /> */}
        <div className={styles.smallSeparator}></div>
        <div className={styles.footer}>
          <div className={styles.footerDivider}></div>

          <div className={`row ${styles.row}`}>
            <div className="col-sm-5 col-xs-12">
              <img src={logo} alt="ezone-logo" className={styles.ezoneLogo} />
              <div className={styles.footerInnerDivider}></div>
         
            </div>
            <div
              className={`col-sm-5 ml-sm-auto col-xs-12 `}
            >
                  <p>Follow us on </p>
              <div className={styles.flexContainer}>
                
                <a href="#"><FontAwesomeIcon
                  icon={faFacebookSquare}
                  className={styles.icon}
                /></a>
                <a href="#"><FontAwesomeIcon
                  icon={faTwitterSquare}
                  className={styles.icon}
                />
                </a>
                
                <a href="#"><FontAwesomeIcon icon={faInstagram} className={styles.icon} /></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} className={styles.iconYT} /></a>
              </div>
            </div>
          </div>

          <div className={styles.footerDividerforCopyRight}></div>

          <div className={styles.copyrightSection}>
            <p>
              &copy; 2019. Engineering and Education Zone. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
