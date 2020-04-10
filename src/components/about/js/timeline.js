import React, { Component } from "react";

import styles from "../scss/timeline.module.scss";

import timelineImg from "../../../assets/images/timeline.png";

class Timeline extends Component {
  render() {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.heading}>Timeline</div>
          <img
            src={timelineImg}
            className={styles.timelineImg}
            alt="timeline-img"
          />
        </div>
      </div>
    );
  }
}

export default Timeline;
