import React, { Component } from "react";

import Header from "../../header/js/header";

import styles from "../scss/pageNotFound.module.scss";

class PageNotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <div className={styles.notFoundMsg}>
          <h4>Page Not Found</h4>
        </div>
      </React.Fragment>
    );
  }
}

export default PageNotFound;
