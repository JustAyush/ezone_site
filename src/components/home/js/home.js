import React, { Component } from "react";

import withSizes from "react-sizes";

import Header from "../../header/js/header";
import Footer from "../../footer/js/footer";

import styles from "../scss/home.module.scss";

import LandingVideo from "./landingVideo";
import LandingImage from "./landingImage";
import ClientSlider from "./clientSlider";
import Service from "./services";
import LittleAbout from "./littleAbout";
import Together from "../../together/js/together";
import Work from "./works";
import FeaturedProject from "./featuredProject";
import Event from "./events";
import LoadingScreen from "../../loadingScreen/js/loadingScreen";

import logo from "../../../assets/images/logoE.png";
import highrise from "../../../assets/images/highrise.jpg";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fetchError: false,
      status: "",
      clients: [],
      works: [],
      events: [],
      featuredWorks: [],

      // for sticky menu
      top: "0px",
      clicked: "one"
    };
  }

  componentDidMount() {
    // fetch("http://www.json-generator.com/api/json/get/bUWWFcxJLm?indent=2")
    fetch("http://www.json-generator.com/api/json/get/cqosvLwqZK?indent=2")
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
            clients: responseJson.message.clients,
            works: responseJson.message.works,
            events: responseJson.message.events.slice(0, 3),
            featuredWorks: responseJson.message.featuredWorks
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
      <React.Fragment>
        <Header />

       {/* landing page carousel if isMobile or else video */}
        {this.props.isMobile ? 
        <LandingImage />
          :
        <LandingVideo /> 
        }

        {/* divider */}
        <div className={styles.divider}></div>

        {/* clients */}
        {!this.state.fetchError ? (
          <React.Fragment>
            {this.state.clients.length > 0 ? (
              <React.Fragment>
                <ClientSlider clients={this.state.clients} />
                <div className={styles.dividerHalf}></div>
                <div className={styles.divider}></div>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ) : null}

        {/* Featured Project */}
        {!this.state.fetchError ? (
          <React.Fragment>
            {this.state.featuredWorks.length > 0 ? (
              <React.Fragment>
                <FeaturedProject featuredWorks={this.state.featuredWorks} />
                {/* <div className={styles.divider}></div> */}
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ) : null}

        {/* Our Services */}
        <Service />

        {/* Little About (Beyond Engineering) */}
        <div className={styles.parallax}>
          {/* divider */}
          <div className={styles.divider}></div>
          <LittleAbout />
          {/* divider */}
          <div className={styles.divider}></div>
        </div>

        {/* works */}
        {!this.state.fetchError ? (
          <React.Fragment>
            {this.state.works.length > 0 ? (
              <React.Fragment>
                <Work works={this.state.works} />
                <div className={styles.divider}></div>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ) : null}

        {/* Events */}
        {!this.state.fetchError ? (
          <React.Fragment>
            {this.state.events.length > 0 ? (
              <React.Fragment>
                <Event events={this.state.events} />
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ) : null}

        {/* We're together section */}
        <Together />

        {/* sticky menu v3 */}

        <div className={styles.stickyOuterCover}>
          <div className={styles.box} style={{ top: this.state.top }}></div>

          <div className={styles.contentCover}>
            <div
              className={styles.informationTech}
              style={{
                height: this.state.clicked === "one" ? "140px" : "auto",
                paddingBottom: this.state.clicked === "one" ? "130px" : "0px",
                paddingLeft: this.state.clicked === "one" ? "50px" : "80px"
              }}
            >
              <h5 onClick={() => this.setState({ clicked: "one", top: "0px" })}>
                Information Technology
              </h5>
              <p
                style={{
                  height: this.state.clicked === "one" ? "auto" : "0px",
                  opacity: this.state.clicked === "one" ? "1" : "0"
                }}
              >
                Our IT team consists of specialist in I.T. services designed to
                meet the needs of corporate, retail, manufacturing, non-profit
                and NGO clients.
              </p>
            </div>
            <div
              className={styles.engineering}
              style={{
                height: this.state.clicked === "two" ? "140px" : "auto",
                paddingBottom: this.state.clicked === "two" ? "165px" : "0px",
                paddingLeft: this.state.clicked === "two" ? "50px" : "80px"
              }}
            >
              <h5
                onClick={() => this.setState({ clicked: "two", top: "110px" })}
              >
                Engineering
              </h5>
              <p
                style={{
                  height: this.state.clicked === "two" ? "auto" : "0px",
                  opacity: this.state.clicked === "two" ? "1" : "0"
                }}
              >
                Our highly experienced and specialised engineers can manage all
                stages of a project to completion using world-leading core
                technologies and delivering complete turn-key project solutions.
              </p>
            </div>
            <div
              className={styles.education}
              style={{
                height: this.state.clicked === "three" ? "140px" : "auto",
                paddingLeft: this.state.clicked === "three" ? "50px" : "80px"
              }}
            >
              <h5
                onClick={() =>
                  this.setState({ clicked: "three", top: "200px" })
                }
              >
                Education
              </h5>
              <p
                style={{
                  height: this.state.clicked === "three" ? "auto" : "0px",
                  opacity: this.state.clicked === "three" ? "1" : "0"
                }}
              >
                Our education team consists of highly qualified and trained
                counselors catering to students seeking for better career
                prospective.
              </p>
            </div>
          </div>
        </div>

        {/* sticky menu  v2*/}
        {/* <div className={styles.outerCover}>
        <div className={styles.cover} style={{ top: this.state.top }}></div>
        <div className={styles.stickyCover}>
          <h4
            style={{ height: this.state.clicked === "one" ? "200px" : "auto" }}
            onClick={() => this.setState({ top: "200px", clicked: "one" })}
          >
            One
          </h4>

          <h4
            style={{ height: this.state.clicked === "two" ? "200px" : "auto" }}
            onClick={() => this.setState({ top: "240px", clicked: "two" })}
          >
            Two
          </h4>

          <h4
            style={{
              height: this.state.clicked === "three" ? "200px" : "auto"
            }}
            onClick={() => this.setState({ top: "280px", clicked: "three" })}
          >
            Three
          </h4>
        </div>
        </div> */}

        {/* sticky menu  v1*/}
        {/* <div className={styles.stickyBar}>
          <div className={styles.informationTech}>
            <h4>Information Technology</h4>
           <p className={styles.content}>
           Our IT team consists of specialist in I.T. services designed to
                meet the needs of corporate, retail, manufacturing, non-profit
                and NGO clients.
           </p>

          </div>
          <div className={styles.stickyDivider}></div>
          <div className={styles.engineering}>
            <h4>Engineering</h4>
            <p className={styles.content}>
            Our highly experienced and specialised engineers can manage
                  all stages of a project to completion using world-leading core
                  technologies and delivering complete turn-key project
                  solutions.
            </p>
          </div>
          <div className={styles.stickyDivider}></div>
          <div className={styles.education}>
            <h4>Education</h4>
            <p className={styles.content}>
            Our education team consists of highly qualified and trained
                  counselors catering to students seeking for better career
                  prospective.
            </p>
          </div>
        </div> */}

        <Footer />
      </React.Fragment>
    );
  }
}


const mapSizesToProps = ({ width }) => ({
  isMobile: width < 992
});

export default withSizes(mapSizesToProps)(Home);
