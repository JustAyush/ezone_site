import React, { Component } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faCalendarAlt,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

import Fade from "react-reveal/Fade";

import styles from "../scss/events.module.scss";

class Event extends Component {
  render() {
    const events = this.props.events.map((item, index) => {
      let prop1 = false;
      let prop2 = false;
      let prop3 = false;
      if (index === 0) {
        prop1 = true;
      } else if (index == 1) {
        prop2 = true;
      } else {
        prop3 = true;
      }
      return (
        <li key={index}>
          <Fade left={prop1} big={prop2} right={prop3}>
            <div className={styles.eventContainer}>
              <div
                className={styles.eventImg}
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className={styles.separator1}></div>
              <div className={styles.title}>{item.name}</div>
              <div className={styles.flexContainer}>
                <div className={styles.dateContainer}>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className={styles.icon}
                  />
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
          </Fade>
        </li>
      );
    });
    return (
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.eventHeading}>News & Events</div>
          <ul className={styles.eventGrid}>{events}</ul>

          <button
            className={`btn btn-default shadow-none ${styles.moreBtn}`}
            onClick={() =>
              this.props.history.push({
                pathname: `/events`
              })
            }
          >
            {" "}
            View More
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Event);
