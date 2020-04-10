import React, { Component } from "react";

import Header from "../../header/js/header";
import Footer from "../../footer/js/footer";

import styles from "../scss/services.module.scss";

import Background from "../../background/js/background";
import AllService from "./allServices";
import TechStack from "./techStack";
import Together from "../../together/js/together";
import LoadingScreen from "../../loadingScreen/js/loadingScreen";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fetchError: false,
      status: "",
      techStack: []
    };
  }

  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/cfpPpBYtWq?indent=2")
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
            techStack: responseJson.message.techStack
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

    // Since every pages are calling the same component for showing the background image,
    // different props are made according to the page
    let props = {
      aboutPage: false,
      servicePage: true,
      workPage: false,
      contactpage: false,
      clientPage: false,
      eventPage: false,
      content: "Services"
    };

    return (
      <React.Fragment>
        <Header />

        {/* Full page background image */}
        <Background {...props} />

        {/* all services setcion */}
        <AllService />

        {/* divider */}
        <div className={styles.divider}></div>

        {/* Technology stack */}
        {!this.state.fetchError ? (
          <React.Fragment>
            {this.state.techStack.length > 0 ? (
              <React.Fragment>
                <TechStack techStack={this.state.techStack} />
                <div className={styles.divider}></div>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ) : null}

        {/* We're together section */}
        <Together />

        {/* divider */}
        <div className={styles.dividerFooter}></div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Service;
