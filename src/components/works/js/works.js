import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import Header from "../../header/js/header";
import Footer from "../../footer/js/footer";

import styles from "../scss/works.module.scss";

import Background from "../../background/js/background";
import Portfolio from "./portfolio";
import Together from "../../together/js/together";

class Work extends Component {
  render() {
    // Since every pages are calling the same component for showing the background image,
    // different props are made according to the page
    let props = {
      aboutPage: false,
      servicePage: false,
      workPage: true,
      contactPage: false,
      clientPage: false,
      eventPage: false,
      content: "Works"
    };

    return (
      <div>
        <Header />

        <Background {...props} />

        {/* divider  */}
        <div className={styles.divider}></div>

        {/* portfolio */}
        <Portfolio />

        {/* divider  */}
        <div className={styles.divider}></div>

        <Together />

        {/* divider */}
        <div className={styles.dividerFooter}></div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Work);
