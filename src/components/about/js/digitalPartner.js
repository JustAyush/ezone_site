import React, { Component } from "react";

import styles from "../scss/digitalPartner.module.scss";

class DigitalPartner extends Component {
  render() {
    const digitalPartners = this.props.digitalPartners.map((item, index) => (
      <React.Fragment key={index}>
        <a href={item.url} target="_blank">
          {" "}
          <img src={item.img} alt="img" />
        </a>
      </React.Fragment>
    ));

    return (
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.digitalPartners}>Digital Partners</div>
          <div className={styles.gridContainer}>{digitalPartners}</div>
        </div>
      </div>
    );
  }
}

export default DigitalPartner;
