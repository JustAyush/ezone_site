import React, { Component } from "react";
import FlashMassage from "react-flash-message";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMobileAlt,
  faPhoneAlt,
  faEnvelopeOpenText
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import styles from "../scss/form.module.scss";

import logo from "../../../assets/images/logoBlack.png";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      message: "",
      flashMessage: "",
      buttonTxt: "Submit"
    };
  }

  // place the form values into respective states
  handleFullNameChange = e => {
    this.setState({
      fullName: e.target.value
    });
  };
  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleMessageChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  // after the user presses the submit button
  handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("fullName", this.state.fullName);
    formData.append("email", this.state.email);
    formData.append("message", this.state.message);

    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const URL = "http://192.168.10.21:8090/api/testFrontend";

    // show 'Please Wait' on the button until the response is received.
    this.setState({
      buttonTxt: "Please Wait"
    });

    fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === "success") {
          console.log(responseJson);
          this.setState({
            flashMessage: "Your form was submitted successfully."
          });
        } else {
          this.setState({
            flashMessage: "Oops. Something went wrong."
          });
        }

        // show "Submit" on the button after the response is received.
        this.setState({
          buttonTxt: "Submit",
          fullName: "",
          email: "",
          message: ""
        });
      })

      .catch(error => {
        console.log(error);
        this.setState({
          flashMessage: "Oops. Something went wrong."
        });
      });
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <div className={styles.gridParent}>
          <div className={`${styles.gridChild} ${styles.gridChild1}`}>
            <p>
              Tell us about your needs, and one of our experts will be in touch
              shortly.
            </p>
            <FlashMassage duration={20000} persistOnHover={true}>
              <p className={styles.flashMessage}>{this.state.flashMessage}</p>
            </FlashMassage>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className={`form-control ${styles.input}`}
                  placeholder="Enter name"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleFullNameChange}
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className={`form-control ${styles.input}`}
                  placeholder="Enter email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">How can we help you?</label>
                <textarea
                  className={`form-control ${styles.input}`}
                  rows="5"
                  placeholder="Enter your message"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleMessageChange}
                  required
                ></textarea>
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <button
                type="submit"
                className={`btn btn-default shadow-none ${styles.submitBtn}`}
              >
                {this.state.buttonTxt}
              </button>
            </form>
          </div>
          <div className={`${styles.gridChild} ${styles.gridChild2}`}>
            <img src={logo} alt="ezone-logo" className={styles.logo} />
            <div className={styles.innerDivider}></div>
            <div className={styles.location}>
              12 Carly Circle <br />
              Rutland MA, 01543 US
            </div>
            <div className={styles.innerDivider}></div>
            <div>
              <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
              <span> 9818756944, 9849551212</span>{" "}
            </div>
            <div className={styles.middleIcon}>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className={styles.icon}
              />
              <span> contact@ezone.com</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
              <span> 01-5551923 </span>
            </div>
            <div className={styles.innerDivider}></div>
            <div className={styles.connect}>Connect with us</div>
            <div className={styles.innerDivider}></div>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className={styles.socialMediaIcon}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className={styles.socialMediaIcon}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.socialMediaIcon}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.socialMediaIcon}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
