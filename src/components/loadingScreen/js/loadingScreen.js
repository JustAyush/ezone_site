import React, { Component } from "react";

import ReactLoading from "react-loading";

import styles from "../scss/loadingScreen.module.scss";

class LoadingScreen extends Component {
  render() {
    return (
      <div className={styles.loadingParent}>
        <ReactLoading
          className={styles.loadingChild}
          type="spinningBubbles"
          color="#11beb8"
        />
      </div>
    );
  }
}

export default LoadingScreen;
