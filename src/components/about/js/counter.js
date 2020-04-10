import React, { Component } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import styles from "../scss/counter.module.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onChange = isVisible => {
    if (isVisible) {
      this.setState({
        visible: true
      });
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <VisibilitySensor partialVisibility={true} onChange={this.onChange}>
          <div className="row">
            <div
              className={`col-6 col-md-3  ${styles.gridCol} ${styles.gridColUpper}`}
            >
              <CountUp
                className={styles.number}
                start={1}
                duration={2}
                end={this.state.visible ? 22 : 1}
                useEasing={false}
              />
              <p className={styles.content}>Employees</p>
            </div>
            <div
              className={`col-6 col-md-3  ${styles.gridCol} ${styles.gridColUpper}`}
            >
              <CountUp
                className={styles.number}
                duration={2}
                end={this.state.visible ? 8 : 1}
                useEasing={false}
              />
              <p className={styles.content}>Years of operation</p>
            </div>
            <div className={`col-6 col-md-3  ${styles.gridCol}`}>
                <CountUp
                  className={styles.number}
                  duration={2}
                  end={this.state.visible ? 200 : 1}
                  useEasing={false}
                />
                <div className={styles.plusSign}>+</div>
              <p className={styles.content}>Completed projects</p>
            </div>
            <div className={`col-6 col-md-3  ${styles.gridCol}`}>
                <CountUp
                  className={styles.number}
                  duration={2}
                  end={this.state.visible ? 50 : 1}
                  useEasing={false}
                />
                <div className={styles.plusSign}>+</div>
              <p className={styles.content}>Clients served</p>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}

export default Counter;
