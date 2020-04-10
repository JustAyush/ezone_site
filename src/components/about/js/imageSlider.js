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

import styles from "../scss/imageSlider.module.scss";
import "../css/imageSlider.scss";

class ImageSlider extends Component {
  render() {
    const images = this.props.images.map((item, index) => (
      <React.Fragment key={index}>
        <div
          className={styles.imageWrapper}
          style={{
            backgroundImage: `url(${item})`
          }}
        >
          {console.log(item)}
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
      className: "imageSlider",
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
        <Slider {...settings}>{images}</Slider>
      </div>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768
});

export default withRouter(withSizes(mapSizesToProps)(ImageSlider));
