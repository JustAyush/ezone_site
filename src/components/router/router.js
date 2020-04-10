import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../home/js/home";
import Service from "../services/js/services";
import Work from "../works/js/works";
import WorkDetail from "../works/js/workDetail";
import About from "../about/js/about";
import Contact from "../contact/js/contact";
import AllClient from "../allClients/js/allClients";
import EventDetail from "../events/js/eventDetail";
import Event from "../events/js/events";
import PageNotFound from "../pageNotFound/js/pageNotFound";


class RouterRoute extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;

    return (
      <Switch>
        <Route exact path={baseUrl + "/"} component={Home} />
        <Route exact path={baseUrl + "/services"} component={Service} />
        <Route exact path={baseUrl + "/works"} component={Work} />
        <Route exact path={baseUrl + "/works/:id"} component={WorkDetail} />
        <Route exact path={baseUrl + "/about"} component={About} />
        <Route exact path={baseUrl + "/contact"} component={Contact} />
        <Route exact path={baseUrl + "/clients"} component={AllClient} />
        <Route exact path={baseUrl + "/events"} component={Event} />
        <Route exact path={baseUrl + "/events/:id"} component={EventDetail} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    );
  }
}

export default RouterRoute;
