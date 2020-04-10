import React, { Component } from "react";

import Header from "../../header/js/header";
import Footer from "../../footer/js/footer";

import styles from "../scss/allClients.module.scss";

import Background from "../../background/js/background";

import LoadingScreen from "../../loadingScreen/js/loadingScreen";

class AllClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fetchError: false,
      status: "",
      clients: []
    };
  }

  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/crcwtwYsUi?indent=2")
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
            clients: responseJson.message.clients
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

    let props = {
      aboutPage: false,
      servicePage: false,
      workPage: false,
      contactpage: false,
      clientPage: true,
      eventPage: false,
      content: "Our Clients"
    };

    const clients = this.state.clients.map((item, index) => (
      <li key={index}>
        <div>
          <img src={item.img} alt="client-logo" />
        </div>
        <p>{item.name}</p>
      </li>
    ));

    return (
      <React.Fragment>
        <Header />

        {/* Full page background image */}
        <Background {...props} />

        {/* divider */}
        <div className={styles.divider}></div>

        {/* Our Clients */}
        <div className={styles.allClientContainer}>
          <div className={styles.ourClients}>Our Clients</div>

          {!this.state.fetchError ? (
            <React.Fragment>
              {this.state.clients.length > 0 ? <ul>{clients}</ul> : null}
            </React.Fragment>
          ) : null}
        </div>
        {/* divider */}
        {/* <div className={styles.divider}></div> */}

        <Footer />
      </React.Fragment>
    );
  }
}

export default AllClient;
