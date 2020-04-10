import React, { Component } from "react";

import styles from "../scss/background.module.scss";

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let backgroundClass = `${this.props.aboutPage ? "about" : ""}${
      this.props.workPage ? "works" : ""
    }${this.props.servicePage ? "services" : ""}${
      this.props.contactPage ? "contact" : ""
    }${this.props.clientPage ? "client" : ""}${
      this.props.eventPage ? "events" : ""
    }`;

    return (
      <div className={styles[backgroundClass]}>
        <div className={styles.backgroundContent}> {this.props.content} </div>
      </div>
    );
  }
}

export default Background;
