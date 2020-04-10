import React, { Component } from "react";

import Header from "../../header/js/header";
import Footer from "../../footer/js/footer";

import styles from "../scss/contact.module.scss";

import Background from "../../background/js/background";
import Form from "./form";
import GoogleMap from "./googleMap";

class Contact extends Component {
  render() {
    // Since every pages are calling the same component for showing the background image,
    // different props are made according to the page
    let props = {
      aboutPage: false,
      servicePage: false,
      workPage: false,
      contactPage: true,
      clientPage: false,
      eventPage: false,
      content: "Let's Talk"
    };

    return (
      <React.Fragment>
        <Header />

        {/* background  */}
        <Background {...props} />

        {/* divider */}
        {/* <div className={styles.divider}></div> */}

        {/* contact us's form */}
        {/* <Form /> */}

        {/* divider */}
        {/* <div className={styles.divider}></div> */}
        {/* divider */}
        {/* <div className={styles.divider}></div> */}

        {/* Google Map */}
        <GoogleMap />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
