import React, { Component } from "react";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMobileAlt,
  faPhoneAlt,
  faEnvelopeOpenText
} from "@fortawesome/free-solid-svg-icons";

import styles from "../scss/googleMap.module.scss";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class GoogleMap extends Component {
  render() {
    return (
      <div className={styles.mapContainer}>
        <div className={styles.mapInnerContainer}>
          <div className="row">
            <MapContent google= {this.props.google} 
              office ='Head Office' 
              location ={["12 Carly Circle", <br/>, "Rutland MA, 01543 US"]}
              mobile="9818756944, 9849551212"
              mail = "contact@ezone.com"
              phone = "01-5551923"
              lat= "37.778519"
              lng ="-122.40564"
              />
            <MapContent google= {this.props.google}
                office ='Project Office' 
                location ={["12 Carly Circle", <br/>, "Rutland MA, 01543 US"]}
                mobile="9818756944, 9849551212"
                mail = "contact@ezone.com"
                phone = "01-5551923"
                lat= "37.778519"
                lng ="-122.40564"
            />
            <MapContent google= {this.props.google}
                office ='Corporate Office' 
                location ={["12 Carly Circle", <br/>, "Rutland MA, 01543 US"]}
                mobile="9818756944, 9849551212"
                mail = "contact@ezone.com"
                phone = "01-5551923"
                lat= "37.778519"
                lng ="-122.40564"
            />
          </div>
        </div>
      </div>
    );
  }
}

class MapContent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return (
      <div className={`col-xs-12 col-md-6 col-lg-4 ${styles.gridCol}`}>
        <div>
          <div className={styles.officeHeading}>{this.props.office}</div>
          <div className={styles.location}>
            {this.props.location}
          </div>
          <div className={styles.innerDivider}></div>
          <div>
            <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
            <span> {this.props.mobile}</span>{" "}
          </div>
          <div className={styles.middleIcon}>
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className={styles.icon}
            />
            <span> {this.props.mail} </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
            <span> {this.props.phone} </span>
          </div>
          <div className={styles.innerMapDivider}></div>
          <div className={styles.map}>
            <Map
              className={styles.mapContent}
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
                lat: this.props.lat,
                lng: this.props.lng
              }}
            >
              {/* <Marker position={{ lat: 27.6727, lng: 85.3253 }} /> */}
              <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "PUT YOUR API KEY HERE"
})(GoogleMap);
