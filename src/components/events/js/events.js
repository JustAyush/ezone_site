import React, { Component } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faCalendarAlt,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

import Header from "../../header/js/header";
import Footer from "../../footer/js/footer";

import styles from "../scss/events.module.scss";

import Background from "../../background/js/background";
import Together from "../../together/js/together";
import LoadingScreen from "../../loadingScreen/js/loadingScreen";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fetchError: false,
      status: "",
      events: []
    };
  }

  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/ceJdBhLVYO?indent=2")
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
            events: responseJson.message.events
          }));
        }
      })

      .catch(error => {
        console.log(error);
      });
  }
  render() {
    let props = {
      aboutPage: false,
      servicePage: false,
      workPage: false,
      contactpage: false,
      clientPage: false,
      eventPage: true,
      content: "Events"
    };

    if (this.state.isLoading) {
      return <LoadingScreen />;
    }

    const events = this.state.events.map((item, index) => {
      return (
        <li key={index}>
          <div className={styles.eventContainer}>
            <div
              className={styles.eventImg}
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className={styles.separator1}></div>
            <div className={styles.title}>{item.name}</div>
            <div className={styles.flexContainer}>
              <div className={styles.dateContainer}>
                <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
                <span className={styles.date}>{item.date}</span>
              </div>
              <div className={styles.venueContainer}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className={styles.icon}
                />
                <span className={styles.venue}>{item.venue}</span>
              </div>
            </div>
            <div className={styles.content}>{item.previewContent}</div>
            <div className={styles.separator1}></div>
            <p
              className={styles.link}
              onClick={() =>
                this.props.history.push({
                  pathname: `/events/${item.eventId}`
                })
              }
            >
              Read More
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className={styles.icon}
              />
            </p>
          </div>
        </li>
      );
    });

    return (
      <React.Fragment>
        <Header />
        {/* Full page background image */}
        <Background {...props} />

        <div className={styles.divider}></div>

        {!this.state.fetchError ? (
          <React.Fragment>
            <div className={styles.container}>
              {/* events */}
              <div className={styles.event}>News & Events</div>
              {this.state.events.length > 0 ? (
                <React.Fragment>
                  <ul className={styles.eventGrid}>{events}</ul>
                </React.Fragment>
              ) : (
                <h4 style={{ color: "#a1a1a1" }}>No events at this moment</h4>
              )}
            </div>
            {/* divider */}
            <div className={styles.divider}></div>
          </React.Fragment>
        ) : null}

        {/* We're together section */}
        <Together />

        {/* divider */}
        {/* <div className={styles.dividerFooter}></div> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Event);
