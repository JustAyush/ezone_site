import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import withSizes from "react-sizes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import styles from "../scss/clientSlider.module.scss";
import "../css/clientSlider.scss";

class ClientSlider extends Component {
  render() {
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
      className: "clientSlider",
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: this.props.isMobile ? 3 : 4,
      slidesToScroll: this.props.isMobile ? 3 : 4,
      appendDots: dots =>
        this.props.isMobile ? (
          <ul style={{ marginBottom: "0px" }}> {dots} </ul>
        ) : (
          <ul style={{ marginBottom: "-20px" }}> {dots} </ul>
        ),
      arrows: this.props.isMobile ? false : true,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />
    };

    const clients = this.props.clients.map((item, index) => (
      <React.Fragment key={index}>
        <a href={item.url} className={styles.imgWrapper} target="_blank">
          <img src={item.img} alt="client-logo" />
          <p>{item.name}</p>
        </a>
      </React.Fragment>
    ));

    return (
      <div className={styles.clientContainer}>
        <div className={styles.ourClients}>Our Clients</div>

        <Slider {...settings}> {clients} </Slider>
      </div>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768
});

export default withRouter(withSizes(mapSizesToProps)(ClientSlider));
