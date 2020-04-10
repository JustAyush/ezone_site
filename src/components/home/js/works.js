import React, { Component } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import Zoom from "react-reveal/Zoom";
import { withRouter } from "react-router-dom";

import styles from "../scss/works.module.scss";

class Work extends Component {
  state = {
    data: this.props.works,
    show: this.props.works.slice(0, 6),
    activeTag: "all"
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: jsonData.works,
  //     show: jsonData.works.slice(0, 6) //initially, the category is switched to All
  //   };
  // }

  // keeps all the works into show when category All is selected
  selectAll = () => {
    this.setState({
      show: this.state.data.slice(0, 6),
      activeTag: "all"
    });
  };

  // keeps the respective works into show
  // keeps works with tag custom_softwares into show when category Custom Software is selected.
  selectItem = type => {
    let arr = [];
    this.state.data.map(item => {
      // console.log(i)
      item.tag.map(subItem => {
        console.log(subItem);
        if (subItem === type) {
          arr = [...arr, item];
        }
      });
    });
    this.setState({
      show: arr,
      activeTag: type
    });
  };

  gridView = () => {
    return this.state.show.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() =>
            this.props.history.push({
              pathname: `/works/${item.id}`
            })
          }
        >
          <Flipped flipId={item.id}>
            <figure>
              <Zoom>
                {/* <img src={item.image} alt="Portfolio image" /> */}
                {item.tag.includes("mobile_apps") ? (
                  <div className={styles.outerContainerMobileApp}>
                    <div className={styles.deviceCollection}>
                      <div className={styles.phoneContainer}>
                        <div className={`${styles.device} ${styles.phone}`}>
                          <img src={item.images.mobile} alt="mobile-screen" />
                        </div>
                      </div>
                      <div className={styles.tabletContainer}>
                        <div className={`${styles.device} ${styles.tablet}`}>
                          <img src={item.images.tablet} alt="tablet-screen" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={styles.outerContainer}>
                    <div className={styles.deviceCollection}>
                      <div className={styles.phoneContainer}>
                        <div className={`${styles.device} ${styles.phone}`}>
                          <img src={item.images.mobile} alt="mobile-screen" />
                        </div>
                      </div>
                      <div className={styles.tabletContainer}>
                        <div className={`${styles.device} ${styles.tablet}`}>
                          <img src={item.images.tablet} alt="mobile-tablet" />
                        </div>
                      </div>
                      <div className={`${styles.device} ${styles.desktop}`}>
                        <img src={item.images.desktop} alt="mobile-desktop" />
                      </div>
                    </div>
                  </div>
                )}
                {/* figcaption is visibile only on tablet and mobile */}
                <figcaption>
                  <div>
                    <span>{item.title}</span>
                    <span className={styles.subtitle}>{item.subtitle}</span>
                  </div>
                </figcaption>
                {/* this overlap is visible only on desktop */}
                <div className={styles.overlayDesktop}>
                  <div>
                    <span>{item.title}</span>
                    <span className={styles.subtitle}>{item.subtitle}</span>
                  </div>
                </div>
              </Zoom>
            </figure>
          </Flipped>
        </li>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.ourWorks}>Our Works</div>
            <div className={styles.flexContainer}>
              {/* here */}
              <p
                onClick={() => this.selectAll()}
                className={
                  this.state.activeTag === "all"
                    ? `${styles.initialCategory} ${styles.active}`
                    : `${styles.initialCategory}`
                }
              >
                All
              </p>

              <p
                onClick={() => this.selectItem("custom_softwares")}
                className={
                  this.state.activeTag === "custom_softwares"
                    ? `${styles.active}`
                    : null
                }
              >
                Custom Softwares
              </p>

              <p
                onClick={() => this.selectItem("business_applications")}
                className={
                  this.state.activeTag === "business_applications"
                    ? `${styles.active}`
                    : null
                }
              >
                Business Applications
              </p>

              <p
                onClick={() => this.selectItem("mobile_apps")}
                className={
                  this.state.activeTag === "mobile_apps"
                    ? `${styles.active}`
                    : null
                }
              >
                Mobile Apps
              </p>

              <p
                onClick={() => this.selectItem("marketing")}
                className={
                  this.state.activeTag === "marketing"
                    ? `${styles.active}`
                    : null
                }
              >
                Marketing
              </p>

              <p
                onClick={() => this.selectItem("government_site")}
                className={
                  this.state.activeTag === "government_site"
                    ? `${styles.active}`
                    : null
                }
              >
                Government Sites
              </p>
            </div>
            <hr />
            {/* <hr className={styles.hrLine} /> */}
          </div>
        </div>
        <div className={styles.workGrid}>
          <Flipper flipKey={this.state.show}>
            <section className={styles.works}>
              <ul>{this.gridView()}</ul>
            </section>
          </Flipper>
        </div>
        <button
          className={`btn btn-default ${styles.viewAllBtn}`}
          onClick={() =>
            this.props.history.push({
              pathname: `/works`
            })
          }
        >
          View All
        </button>
      </React.Fragment>
    );
  }
}

export default withRouter(Work);
