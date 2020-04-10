import React, { Component } from "react";

import styles from "../scss/landingImage.module.scss";

class LandingImage extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }
  render() {
    return (
      <React.Fragment>
        {/* for desktop */}
        <div className={styles.container}>
          <div className={styles.parentPart1}>
            <div className={styles.part}></div>
            <div className={styles.overlay}>
              <div className={styles.heading}> Information Technology</div>
              <div className={styles.innerDivider}></div>
              <p>
                Our IT team consists of specialist in I.T. services designed to
                meet the needs of corporate, retail, manufacturing, non-profit
                and NGO clients.
              </p>
              <div className={styles.innerDivider}></div>
            </div>
          </div>
          <div className={styles.parentPart2}>
            <div className={styles.part}>
              <div className={styles.overlay}>
                <div className={styles.heading}> Engineering </div>
                <div className={styles.innerDivider}></div>
                <p>
                  Our highly experienced and specialised engineers can manage
                  all stages of a project to completion using world-leading core
                  technologies and delivering complete turn-key project
                  solutions.
                </p>
                <div className={styles.innerDivider}></div>
              </div>
            </div>
          </div>
          <div className={styles.parentPart3}>
            <div className={styles.part}>
              <div className={styles.overlay}>
                <div className={styles.heading}> Education </div>
                <div className={styles.innerDivider}></div>
                <p>
                  Our education team consists of highly qualified and trained
                  counselors catering to students seeking for better career
                  prospective.
                </p>
                <div className={styles.innerDivider}></div>
              </div>
            </div>
          </div>

          <div className={styles.caption}>
            Learning from the past <br />
            Transforming for the future
          </div>
        </div>

        {/* for mobile */}

        <div className={styles.containerMobile}>
          <div id="demo" className="carousel slide" data-ride="carousel">
            {/* Indicators  */}
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            {/* The slideshow  */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className={styles.bg1}>
                  {" "}
                  <div class="carousel-caption">
                    <div className={styles.heading}>
                      {" "}
                      Information Technology{" "}
                    </div>
                    <div className={styles.innerDivider}></div>
                    <p>
                      Our IT team consists of specialist in I.T. services
                      designed to meet the needs of corporate, retail,
                      manufacturing, non-profit and NGO clients.
                    </p>
                    <div className={styles.innerDivider}></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className={styles.bg2}>
                  <div class="carousel-caption">
                    <div className={styles.heading}> Engineering </div>
                    <div className={styles.innerDivider}></div>
                    <p>
                      Our highly experienced and specialised engineers can
                      manage all stages of a project to completion using
                      world-leading core technologies and delivering complete
                      turn-key project solutions.
                    </p>
                    <div className={styles.innerDivider}></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className={styles.bg3}>
                  <div class="carousel-caption">
                    <div className={styles.heading}> Education </div>
                    <div className={styles.innerDivider}></div>
                    <p>
                      Our education team consists of highly qualified and
                      trained counselors catering to students seeking for better
                      career prospective.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <Left and right controls  */}
            {/* <a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a> */}
          </div>

          <div className={styles.caption}>
            {" "}
            Learning from the past <br />
            Transforming for the future
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingImage;
