import React, { Component } from "react";

import Header from "../../header/js/header";
import Footer from "../../footer/js/footer";

import styles from "../scss/about.module.scss";

import Background from "../../background/js/background";
import Info from "./info.js";
import ImageSlider from "./imageSlider.js";
import Counter from "./counter.js";
import Timeline from "./timeline.js";
import Team from "./team.js";
import DigitalPartner from "./digitalPartner.js";
import Together from "../../together/js/together";
import LoadingScreen from "../../loadingScreen/js/loadingScreen";
import { thisExpression } from "@babel/types";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fetchError: false,
      status: "",
      team: []
    };
  }

  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/bUVZHGUtiW?indent=2")
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === "error") {
          this.setState(state => ({
            isLoading: false,
            fetchError: true
          }));
        } else {
          this.setState(state => ({
            isLoading: false,
            team: responseJson.message.team,
            images: responseJson.message.images,
            digitalPartners: responseJson.message.digitalPartners
          }));
        }
      })

      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingScreen />;
    }

    let props = {
      aboutPage: true,
      servicePage: false,
      workPage: false,
      contactpage: false,
      clientPage: false,
      eventPage: false,
      content: "About"
    };

    return (
      <React.Fragment>
        <Header />

        {/* Full page background image */}
        <Background {...props} />

        {/* divider */}
        <div className={styles.divider}></div>

        {/* company's info */}
        <Info />

        {/* divider */}
        <div className={styles.divider}></div>

        {/* Image Slider */}
        <ImageSlider images={this.state.images} />

        
        {/* divider */}
        <div className={styles.divider}></div>

        {/* Counter */}
        <Counter />
        
        {/* divider */}
        <div className={styles.divider}></div>

        {/* Timeline */}
        <Timeline />

        {/* team */}
        <Team team={this.state.team} />

        <DigitalPartner digitalPartners={this.state.digitalPartners} />

        {/* We're together section */}
        <Together />

        {/* divider */}
        <div className={styles.dividerFooter}></div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
