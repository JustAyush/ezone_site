import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../scss/info.module.scss";

class Info extends Component {

  render() {

    // Company Profile Download Link  
    const fileDownloadLink = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

    return (
      <div className={styles.infoSection}>
        <div className={styles.gridInfoParent}>
          <div
            className={`${styles.gridInfoElement1} ${styles.gridInfoElement}`}
          >
            <p className={styles.heading}>Transformative placemaking </p>
            <p className={styles.content}>
              We create spaces that are engaging and uplifting that contribute
              to our collective sense of health and well-being, and encourage
              the sustainable stewardship of our communities.
              <br /> <br />
              We create spaces that are engaging and uplifting that contribute
              to our collective sense of health and well-being, and encourage
              the sustainable stewardship of our communities.
            </p>
            <a href={fileDownloadLink} target="_blank" download="HTML 5 PDF" className={`btn btn-default ${styles.downloadBtn}`} >Download Company Profile</a>

          </div>
          <div
            className={`${styles.gridInfoElement2} ${styles.gridInfoElement}`}
          >
            <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteLeft} />
            <div className={styles.quoteDivider}></div>
            <p className={styles.quoteContent}>
              Design matters and with that comes a huge responsibility to drive
              innovative, creative, and relevant solutions.
            </p>
            <FontAwesomeIcon
              icon={faQuoteRight}
              className={styles.quoteRight}
            />
            <div className={styles.quoteDivider}></div>
            <div className={styles.name}>Bruce Wayne</div>
            <div className={styles.position}>CEO, Wayne Foundations</div>
          </div>
        </div>

        {/* <div className={styles.flexContainer}>
          <div className={styles.leftContent}>
            <p className={styles.heading}>Transformative placemaking </p>
            <p className={styles.content}>
              We create spaces that are engaging and uplifting that contribute
              to our collective sense of health and well-being, and encourage
              the sustainable stewardship of our communities.
            </p>
          </div>
          <div className={styles.rightContent}>
            <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteLeft} />
            <div class={styles.quoteDivider}></div>
            <p className={styles.quoteContent}>
              Design matters and with that comes a huge responsibility to drive
              innovative, creative, and relevant solutions.
            </p>
            <FontAwesomeIcon
              icon={faQuoteRight}
              className={styles.quoteRight}
            />
            <div class={styles.quoteDivider}></div>
            <div className={styles.name}>Bruce Wayne</div>
            <div className={styles.position}>CEO, Wayne Foundations</div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Info;
