import React, { Component } from "react";

import styles from "../scss/techStack.module.scss";

class TechStack extends Component {
  render() {
    const techStack = this.props.techStack.map((item, index) => (
      <li key={index}>
        <div className={styles.gridChild}>
          <div className={styles.childContent}>
            <img className={styles.logo} src={item.img} alt="techLogo" />
            <p>{item.name}</p>
          </div>
        </div>
      </li>
    ));

    return (
      <div className={styles.techStackContainer}>
        <div className={styles.techStack}>Technologies</div>

        <ul>{techStack}</ul>
      </div>
    );
  }
}

export default TechStack;
