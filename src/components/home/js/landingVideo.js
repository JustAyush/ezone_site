import React, { Component } from "react";

import styles from "../scss/landingVideo.module.scss";

import video from "../../../assets/video/video.mp4";


class LandingVideo extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }
  render() {
    return (
      <React.Fragment>
        
        <div className={styles.landingVideo}>
       <video src={video} autoPlay={true} loop={true} >
         </video> 
        </div>
        <div className={styles.videoOverlay}></div>

        <div className={styles.textContainer}>
            <div className={styles.smallerTxt}>Aim</div>
            <div className={styles.largerTxt}>Transforming Now</div>    
        </div>

      </React.Fragment>
    );
  }
}

export default LandingVideo;
