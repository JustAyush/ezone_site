import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import withSizes from "react-sizes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../scss/featuredProject.module.scss";
import "../css/featuredProject.scss";

class FeaturedProject extends Component {
  render() {
    const featuredWorks = this.props.featuredWorks.map((item, index) => (
      <React.Fragment key={index}>
        <div
          className={styles.slide}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${item.img})`
          }}
        >
          <div className={styles.divider}></div>
          <div className={styles.contentContainer}>
            <div className={styles.featuredProject}>Featured Projects</div>
            {/* <div className={styles.divider}></div> */}
            <div className={styles.title}>{item.title}</div>
            <div className={styles.subTitle}>{item.subtitle}</div>
            <div className={styles.dividerHalf}></div>
            <button
              className={`btn btn-default shadow-none ${styles.moreBtn}`}
              onClick={() =>
                this.props.history.push({
                  pathname: `/works/1`
                })
              }
            >
              {" "}
              Read More
            </button>
          </div>
        </div>
      </React.Fragment>
    ));

    const ArrowLeft = props => (
      <div {...props} className={styles.prev}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
      </div>
    );
    const ArrowRight = props => (
      <div {...props} className={styles.next}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
      </div>
    );

    const settings = {
      className: "featuredProject",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: this.props.isMobile ? false : true,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />,
      appendDots: dots => <ul style={{ marginBottom: "50px" }}> {dots} </ul>
    };

    return (
      <div className={styles.container}>
        <Slider {...settings}>{featuredWorks}</Slider>

        <div className={styles.featuredHeadingWrapper}>
          <div className={styles.divider}></div>
          <div className={styles.featuredHeading}>Featured Projects </div>
        </div>
      </div>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768
});

export default withRouter(withSizes(mapSizesToProps)(FeaturedProject));
