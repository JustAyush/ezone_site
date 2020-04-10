import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import Slider from "react-slick";

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import withSizes from "react-sizes";

import "../css/recent.scss";

import styles from "../scss/workDetail.module.scss";

import Header from "../../header/js/header";
import Footer from "../../footer/js/footer";

import Together from "../../together/js/together";
import LoadingScreen from "../../loadingScreen/js/loadingScreen";

import mockup from "../../../assets/images/desktop.png";
import siteImg from "../../../assets/images/Florence.jpg";

class WorkDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fetchError: false,
      workDetail: [],
      recentWork: []
    };
  }

  componentDidMount() {
    // this is the id of work whose details is to be fetched
    // ${this.props.match.params.id}
    // you might want to do sth like this
    // fetch (`api/works/${this.props.match.params.id}`)

    // the upper one is for workDetail of work with tag 'mobile apps'. Only tablet and mobile screen will be shown
    // the lower one is for all except those with tag 'mobile apps'. All three screens (desktop, tablet and mobile) will be shown
    // fetch("http://www.json-generator.com/api/json/get/cwgvuyGjeG?indent=2")
    fetch("http://www.json-generator.com/api/json/get/bGzNPdDFTS?indent=2")
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
            workDetail: responseJson.message.workDetail,
            recentWork: responseJson.message.recentWorks
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

    return (
      <div>
        <Header workDetail={true}/>

        {!this.state.fetchError ? (
          <React.Fragment>
            {/* first Image */}
            <div
              className={styles.bgWithMockups}
            >
              <div className={styles.cover}>
                <div className={styles.parentGrid}>
                  <div className={styles.childGrid1}>
                    <div className={styles.body}>
                      {" "}
                      <div className={styles.subtitle}>
                        {this.state.workDetail.subtitle !== undefined ? (
                          <React.Fragment>
                            {this.state.workDetail.subtitle}
                          </React.Fragment>
                        ) : null}
                      </div>
                      <div className={styles.titleSeparator}></div>
                      <div className={styles.title}>
                        {this.state.workDetail.title}
                      </div>
                      <div className={styles.titleSeparator}></div>
                      <div className={styles.content}>
                        {this.state.workDetail.content}
                      </div>
                    </div>
                  </div>
                  <div className={styles.childGrid2}>
                    {this.state.workDetail.tag !== "mobile_apps" ? (
                      <div className={styles.outerContainer}>
                        <div className={styles.deviceCollection}>
                          <div className={styles.phoneContainer}>
                            <div className={`${styles.device} ${styles.phone}`}>
                              <img
                                src={this.state.workDetail.images.mobile}
                                alt="mobile-screen"
                              />
                            </div>
                          </div>
                          <div className={styles.tabletContainer}>
                            <div
                              className={`${styles.device} ${styles.tablet}`}
                            >
                              <img
                                src={this.state.workDetail.images.mobile}
                                alt="tablet-screen"
                              />
                            </div>
                          </div>
                          <div className={`${styles.device} ${styles.desktop}`}>
                            <img
                              src={this.state.workDetail.images.desktop}
                              alt="desktop-screen"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.outerContainerMobileApp}>
                        <div className={styles.deviceCollection}>
                          <div className={styles.phoneContainer}>
                            <div className={`${styles.device} ${styles.phone}`}>
                              <img
                                src={this.state.workDetail.images.mobile}
                                alt="mobile-screen"
                              />
                            </div>
                          </div>
                          <div className={styles.tabletContainer}>
                            <div
                              className={`${styles.device} ${styles.tablet}`}
                            >
                              <img
                                src={this.state.workDetail.images.tablet}
                                alt="tablet-screen"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* divider */}
            <div className={styles.divider}></div>

            {/* client */}
            {this.state.workDetail.client !== undefined ? (
              <div className={styles.clientContainer}>
                <div className={styles.gridParent}>
                  <div className={styles.childGrid1}>Client</div>
                  <div className={styles.childGrid2}>
                    {this.state.workDetail.client}
                  </div>
                </div>
              </div>
            ) : null}

            {/* divider */}
            <div className={styles.divider}></div>

            {/* The Challenge */}
            {this.state.workDetail.challenge !== undefined ? (
              <div className={styles.challengeContainer}>
                <div className={styles.gridParent}>
                  <div className={styles.childGrid1}>The Challenge</div>
                  <div className={styles.childGrid2}>
                    {this.state.workDetail.challenge}
                  </div>
                </div>
              </div>
            ) : null}

            {/* divider */}
            <div className={styles.divider}></div>

            {/* YouTube Container */}
            {this.state.workDetail.youtubeSrc !== undefined ? (
              <React.Fragment>
                <div className={styles.videoContainer}>
                  <div className={styles.embed}>
                    <iframe
                      className={styles.video}
                      src={this.state.workDetail.youtubeSrc}
                      allowFullScreen="allowFullScreen"
                    ></iframe>
                  </div>
                </div>

                {/* divider */}
                <div className={styles.divider}></div>
              </React.Fragment>
            ) : null}

            {/* The Solution */}
            {this.state.workDetail.solution !== undefined ? (
              <div className={styles.solutionContainer}>
                <div className={styles.gridParent}>
                  <div className={styles.childGrid1}>The Solution</div>
                  <div className={styles.childGrid2}>
                    {this.state.workDetail.solution}
                  </div>
                </div>
              </div>
            ) : null}

            {/* divider */}
            <div className={styles.divider}></div>

            {this.state.recentWork.length > 0 ? (
              <React.Fragment>
                {/* recent projects */}
                <div className={styles.outerContainerRecentWorks}>
                  <div className={styles.container}>
                    <div className={styles.divider}></div>
                    <div className={styles.recentWorks}>Recent Works</div>
                  </div>
                  <div className={styles.sliderWrapper}>
                    <RecentProjectSlider
                      isMobile={this.props.isMobile}
                      recentWork={this.state.recentWork}
                      history={this.props.history}
                    />
                  </div>
                  <div className={styles.dividerHalf}></div>
                </div>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ) : null}

        {/* better together */}
        <Together />

        <Footer />
      </div>
    );
  }
}

class RecentProjectSlider extends Component {
  render() {
    const settings = {
      className: "recent",
      centerMode: true,
      centerPadding: 0,
      // infinite: true,
      slidesToShow: this.props.isMobile ? 1 : 3,
      speed: 500,
      dots: true,
      slidesToScroll: 1,
      // variableWidth: true,
      variableHeight: true,
      autoplay: true,
      autoplaySpeed: 4000,
      // useCSS: true
      appendDots: dots => <ul style={{ marginBottom: "-40px" }}> {dots} </ul>
    };
    const recentWork = this.props.recentWork.map((item, index) => (
      <div
        key={index}
        onClick={() => {
          this.props.history.push({
            pathname: `/works/1`
          });
        }}
      >
        {item.tag !== "mobile_apps" ? (
          <div className={styles.outerContainer}>
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
              <div className={`${styles.device} ${styles.desktop}`}>
                <img src={item.images.desktop} alt="desktop-screen" />
              </div>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    ));

    return (
      <div>
        <Slider {...settings}>{recentWork}</Slider>
      </div>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 992
});

export default withRouter(withSizes(mapSizesToProps)(WorkDetail));

{
  /* <div className={`container-fluid`}> */
}
{
  /* <div class={`row  ${styles.gridCover}`}>
<div
  className={`col-sm-12 col-lg-7 justify-content-around ${styles.text}`}
>
  .col-sm-4
</div>
<div
  className={`col-sm-12  col-lg-5 justify-content-around ${styles.imageColumn}`}
>
  <div className={` ${styles.image}`}>
    <img alt="img" src={mockup} className={styles.mockup} />
    <img alt="site-img" src={siteImg} className={styles.siteImg} />
  </div>
  </div>
</div> */
}
{
  /* </div> */
}
