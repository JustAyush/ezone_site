import React, { Component } from "react";

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from "react-share";

import ModalImage from "react-modal-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarAlt,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

import Header from "../../header/js/header";
import Footer from "../../footer/js/footer";

import LoadingScreen from "../../loadingScreen/js/loadingScreen";

import styles from "../scss/eventDetail.module.scss";
import { thisExpression } from "@babel/types";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fetchError: false,
      eventDetail: []
    };
  }

  componentDidMount() {
    // this is the id of event whose details is to be fetched
    // ${this.props.match.params.id}
    // you might want to do sth like this
    // fetch (`api/events/${this.props.match.params.id}`)

    fetch("http://www.json-generator.com/api/json/get/cfxSlnoBbC?indent=2")
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
            eventDetail: responseJson.message.eventDetail
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

    const smallerImages = this.state.eventDetail.smallerImg.map(
      (item, index) => (
        <li key={index}>
          <img alt="gallery-img" className={styles.galleyImg} src={item} />
        </li>
      )
    );

    return (
      <React.Fragment>
        <Header />

        {!this.state.fetchError ? (
          <React.Fragment>
            <div
              className={styles.parallax}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${this.state.eventDetail.landingImg})`
              }}
            >
              <div className={styles.eventHeading}>
                <div className={styles.eventTitle}>
                  {this.state.eventDetail.title}
                </div>
                <span className={styles.dateContainer}>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className={styles.icon}
                  />
                  <span className={styles.eventDate}>
                    {this.state.eventDetail.date}
                  </span>
                </span>
                <span className={styles.venueContainer}>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className={styles.icon}
                  />
                  <span className={styles.eventVenue}>
                    {this.state.eventDetail.venue}
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.upperContainer}>
              <div className={styles.upperContent}>
                {this.state.eventDetail.contentMain}
              </div>
              <div className={styles.divider}></div>
            </div>
            <div className={styles.largePicGridParent}>
              <div
                className={styles.childGrid1}
                style={{
                  backgroundImage: `url(${this.state.eventDetail.bigImgLeft})`
                }}
              ></div>
              <div
                className={styles.childGrid2}
                style={{
                  backgroundImage: `url(${this.state.eventDetail.bigImgRight})`
                }}
              ></div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.lowerContainer}>
              <div className={styles.lowerContent}>
                {this.state.eventDetail.contentSupporting}
              </div>
            </div>
            <div className={styles.divider}></div>
            {this.state.eventDetail.smallerImg.length > 0 ? (
              <React.Fragment>
                <div className={styles.galleryContainer}>
                  <ul className={styles.gridContainer}>{smallerImages}</ul>
                </div>
                <div className={styles.divider}></div>
              </React.Fragment>
            ) : null}

            {this.state.eventDetail.youtubeSrc !== undefined ? (
              <React.Fragment>
                <div className={styles.videoContainer}>
                  <div className={styles.embed}>
                    <iframe
                      className={styles.video}
                      src={this.state.eventDetail.youtubeSrc}
                      allowfullscreen="allowfullscreen"
                      mozallowfullscreen="mozallowfullscreen"
                      msallowfullscreen="msallowfullscreen"
                      oallowfullscreen="oallowfullscreen"
                      webkitallowfullscreen="webkitallowfullscreen"
                    ></iframe>
                  </div>
                </div>
                <div className={styles.dividerHalf}></div>
              </React.Fragment>
            ) : null}

            <div className={styles.shareContainer}>
              <div className={styles.shareTxt}>Share this event:</div>
              <FacebookShareButton
                className={`${styles.iconShare} ${styles.middleIcon}`}
                url="https://en.wikipedia.org/wiki/Elon_Musk"
              >
                <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
              </FacebookShareButton>
              <TwitterShareButton
                className={`${styles.iconShare}`}
                url="https://en.wikipedia.org/wiki/Elon_Musk"
              >
                <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              </TwitterShareButton>
            </div>
            <div className={styles.dividerHalf}></div>
            {this.state.eventDetail.previousEvent !== undefined &&
            this.state.eventDetail.nextEvent !== undefined ? (
              <div className={styles.otherProjectParentGrid}>
                <div
                  className={styles.childGrid1}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url(${this.state.eventDetail.previousEvent.img})`
                  }}
                >
                  <div className={styles.previousTxt}>Previous </div>
                </div>
                <div
                  className={styles.childGrid2}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
        url(${this.state.eventDetail.nextEvent.img})`
                  }}
                >
                  <div className={styles.nextTxt}>Next </div>
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ) : null}

        <Footer />
      </React.Fragment>
    );
  }
}

export default EventDetail;
